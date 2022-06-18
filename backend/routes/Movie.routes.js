const router = require("express").Router();
const Movie = require("../models/Movie.models");
const { authorization } = require("../middleware/Authorization.middleware");
const {
	InternalServer,
	InternalServer_Code,
	Validation_Code,
	Ok,
	Ok_Code,
	Created,
} = require("../Status/StatusCode");

////// Create Movie \\\\\\
router.post("/", authorization, async (req, res) => {
	if (req.user.isAdmin) {
		const newMovie = new Movie(req.body);
		try {
			const savedMovie = await newMovie.save();
			return res.status(Created).json({ message: Ok, savedMovie });
		} catch (error) {
			return res
				.status(InternalServer_Code)
				.json({ InternalServer, error: error.message });
		}
	} else {
		return res.status(Validation_Code).json({ message: "Admins Only." });
	}
});

////// Update Movie \\\\\\
router.put("/:id", authorization, async (req, res) => {
	if (req.user.isAdmin) {
		try {
			const updateMovie = await Movie.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			return res.status(Ok_Code).json({ message: Ok, updateMovie });
		} catch (error) {
			return res.status(InternalServer_Code).json({ InternalServer, error });
		}
	} else {
		return res.status(Validation_Code).json({ message: "Admins Only." });
	}
});

////// Delete Movie \\\\\\
router.delete("/:id", authorization, async (req, res) => {
	if (req.user.isAdmin) {
		try {
			await Movie.findByIdAndDelete(req.params.id);
			return res.status(Ok_Code).json({ message: "Movie Deleted " + Ok });
		} catch (error) {
			return res.status(InternalServer_Code).json({ InternalServer, error });
		}
	} else {
		return res.status(Validation_Code).json({ message: "Admins Only." });
	}
});

////// Get One Movie \\\\\\
router.get("/find/:id", authorization, async (req, res) => {
	try {
		const movie = await Movie.findById(req.params.id);
		return res.status(Ok_Code).json({ message: Ok, movie });
	} catch (error) {
		return res
			.status(InternalServer_Code)
			.json({ InternalServer, error: error.message });
	}
});

////// Get Random Movie \\\\\\
router.get("/random", authorization, async (req, res) => {
	const type = req.query.type;
	let movie;
	try {
		if (type == "Series") {
			movie = await Movie.aggregate([
				{ $match: { isSeries: true } },
				{ $sample: { size: 1 } },
			]);
		} else {
			movie = await Movie.aggregate([
				{ $match: { isSeries: false } },
				{ $sample: { size: 1 } },
			]);
		}
		return res.status(Ok_Code).json({ message: Ok, movie });
	} catch (error) {
		return res
			.status(InternalServer_Code)
			.json({ InternalServer, error: error, message });
	}
});

////// Get All Movie \\\\\\
router.get("/", authorization, async (req, res) => {
	const query = req.query.recent;
	if (req.user.isAdmin) {
		try {
			allMovies = query ? (await Movie.find()).reverse() : await Movie.find();
			return res.status(Ok_Code).json({ message: Ok, allMovies });
		} catch (error) {
			return res
				.status(InternalServer_Code)
				.json({ message: InternalServer, error: error.message });
		}
	} else {
		return res.status(Validation_Code).json({ message: "Admins Only." });
	}
});

module.exports = router;
