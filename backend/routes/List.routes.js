const router = require("express").Router();
const List = require("../models/List.models");
const { authorization } = require("../middleware/Authorization.middleware");
const {
	InternalServer,
	InternalServer_Code,
	Validation_Code,
	Ok,
	Ok_Code,
	Created,
} = require("../Status/StatusCode");

////// Create List \\\\\\
router.post("/", authorization, async (req, res) => {
	if (req.user.isAdmin) {
		const newList = new List(req.body);
		try {
			const savedList = await newList.save();
			return res.status(Created).json({ message: Ok, savedList });
		} catch (error) {
			return res
				.status(InternalServer_Code)
				.json({ InternalServer, error: error.message });
		}
	} else {
		return res.status(Validation_Code).json({ message: "Admins Only." });
	}
});

////// Update List \\\\\\
router.put("/:id", authorization, async (req, res) => {
	if (req.user.isAdmin) {
		try {
			const updateMovie = await List.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			return res.status(Ok_Code).json({ message: Ok, updateMovie });
		} catch (error) {
			return res
				.status(InternalServer_Code)
				.json({ InternalServer, error: error.message });
		}
	} else {
		return res.status(Validation_Code).json({ message: "Admins Only." });
	}
});

////// Delete List \\\\\\
router.delete("/:id", authorization, async (req, res) => {
	if (req.user.isAdmin) {
		try {
			await List.findByIdAndDelete(req.params.id);
			return res.status(Ok_Code).json({ message: "List Deleted " + Ok });
		} catch (error) {
			return res
				.status(InternalServer_Code)
				.json({ InternalServer, error: error.message });
		}
	} else {
		return res.status(Validation_Code).json({ message: "Admins Only." });
	}
});

////// Get All List \\\\\\
router.get("/", authorization, async (req, res) => {
	const typeQuery = req.query.type;
	const genreQuery = req.query.genre;
	let list = [];
	try {
		if (typeQuery) {
			if (genreQuery) {
				list = await List.aggregate([
					{ $sample: { size: 10 } },
					{ $match: { type: typeQuery, genre: genreQuery } },
				]);
			} else {
				list = await List.aggregate([
					{ $sample: { size: 10 } },
					{ $match: { type: typeQuery } },
				]);
			}
		} else {
			list = await List.aggregate([{ $sample: { size: 10 } }]);
		}
		return res.status(Ok_Code).json({ message: Ok, list });
	} catch (error) {
		return res
			.status(InternalServer_Code)
			.json({ message: InternalServer + "we", error: error.message });
	}
});

module.exports = router;
