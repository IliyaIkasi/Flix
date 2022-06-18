const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const { authorization } = require("../middleware/Authorization.middleware");
const Movie = require("../models/Movie.models");
const User = require("../models/User.models");
const {
	InternalServer_Code,
	InternalServer,
	Ok_Code,
	Ok,
	Validation_Code,
	Forbidden,
	NotFound,
} = require("../Status/StatusCode");

// To handle file uploads
const imageStorage = multer.diskStorage({
	destination: "./public/medias/images",
	filename: (req, file, callback) => {
		callback(null, file.originalname);
	},
});
const videoStorage = multer.diskStorage({
	destination: "./public/medias/videos",
	filename: (req, file, callback) => {
		callback(null, file.originalname);
	},
});
const imageUpload = multer({
	storage: imageStorage,
	limits: {
		fileSize: 150000000,
	},
	fileFilter: (req, file, cb) => {
		// allow images only
		if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
			console.log("Only image are allowed.");
		}
		cb(null, true);
	},
});
const videoUpload = multer({
	storage: videoStorage,
	limits: {
		fileSize: 150000000,
	},
	fileFilter: (req, file, cb) => {
		// allow images only
		if (!file.originalname.match(/\.(mp4|mp3|png|gif)$/)) {
			console.log("Only image are allowed.");
		}
		cb(null, true);
	},
});

////// Add User Profile Image \\\\\\
router.patch(
	"/users/image/:id",
	authorization,
	imageUpload.single("profilePic"),
	async (req, res) => {
		const _id = req.params.id;
		if (req.user.id) {
			try {
				const uploadImage = await User.findOneAndUpdate(
					{ _id },
					{
						$set: {
							profilePic: req.file.path,
						},
					},
					{ new: true }
				);
				if (!uploadImage) return res.status(NotFound).json({ NotFound });
				const { password, ...info } = uploadImage._doc;
				return res.status(Ok_Code).json({ Ok, info });
			} catch (error) {
				return res
					.status(InternalServer_Code)
					.json({ InternalServer, error: error.message });
			}
		} else {
			return res.status(Validation_Code).json({ Forbidden });
		}
	}
);

////// Add Movie Image \\\\\\
router.patch(
	"/movies/image/:id",
	authorization,
	imageUpload.single("img"),
	async (req, res) => {
		const { id } = req.user;
		const _id = req.params.id;
		if (id) {
			try {
				const uploadImage = await Movie.findOneAndUpdate(
					{ _id },
					{
						$set: {
							img: req.file.path,
						},
					},
					{ new: true }
				);
				if (!uploadImage) return res.status(NotFound).json({ NotFound });
				const { password, ...info } = uploadImage._doc;
				return res.status(Ok_Code).json({ Ok, info });
			} catch (error) {
				return res
					.status(InternalServer_Code)
					.json({ InternalServer, error: error.message });
			}
		} else {
			return res.status(Validation_Code).json({ Forbidden });
		}
	}
);

////// Add Movie Video \\\\\\
router.patch(
	"/movies/video/:id",
	authorization,
	videoUpload.single("video"),
	async (req, res) => {
		const _id = req.params.id;
		if (req.user.id) {
			try {
				const uploadImage = await Movie.findOneAndUpdate(
					{ _id },
					{
						$set: {
							trailer: req.file.path,
							video: req.file.path,
						},
					},
					{ new: true }
				);
				if (!uploadImage) return res.status(NotFound).json({ NotFound });
				const { password, ...info } = uploadImage._doc;
				return res.status(Ok_Code).json({ Ok, info });
			} catch (error) {
				return res
					.status(InternalServer_Code)
					.json({ InternalServer, error: error.message });
			}
		} else {
			return res.status(Validation_Code).json({ Forbidden });
		}
	}
);

module.exports = router;
