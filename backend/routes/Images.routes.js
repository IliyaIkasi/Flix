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

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "uploads");
	},
	filename: (req, file, callback) => {
		console.log(file);
		callback(null, Date.now() + path.extname(file.originalname));
	},
});

const fileFilter = (req, file, cb) => {
	if (file.mimetype == "image/jpg" || file.mimetype == "image/png") {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({
	storage: storage,
	limits: { fileSize: 150000000 },
	fileFilter: fileFilter,
});

////// Add User Profile Image \\\\\\
router.patch(
	"/users/image",
	authorization,
	upload.single("profilePic"),
	async (req, res) => {
		const { email } = req.user;
		if (email) {
			try {
				const uploadImage = await User.findOneAndUpdate(
					email,
					{ $set: { profilePic: req.file } },
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
			return re.status(Validation_Code).json({ Forbidden });
		}
	}
);

////// Add Movie Image \\\\\\
router.patch(
	"/movies/image",
	authorization,
	upload.single("img"),
	async (req, res) => {
		const { email } = req.user;
		if (email) {
			try {
				const uploadImage = await Movie.findOneAndUpdate(
					email,
					{ $set: { img: req.file } },
					{ new: true }
				);
				if (!uploadImage) return res.status(NotFound).json({ NotFound });
				return res.status(Ok_Code).json({ Ok, uploadImage });
			} catch (error) {
				return res
					.status(InternalServer_Code)
					.json({ InternalServer, error: error.message });
			}
		} else {
			return re.status(Validation_Code).json({ Forbidden });
		}
	}
);

module.exports = router;
