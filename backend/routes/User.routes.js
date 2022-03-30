const router = require("express").Router();
const User = require("../models/User.models");
const CryptoJS = require("crypto-js");
const { authorization } = require("../middleware/Authorization.middleware");
const {
	InternalServer,
	InternalServer_Code,
	Validation_Code,
	Ok,
	Ok_Code,
	NotFound,
	NotFound_Code,
} = require("../Status/StatusCode");

////// Update User \\\\\\
router.put("/:id", authorization, async (req, res) => {
	const { id, isAdmin } = req.user;
	const { password } = req.body;
	if (id === req.params.id || isAdmin) {
		if (password) {
			CryptoJS.AES.encrypt(
				password,
				process.env.PASSWORD_SECRET_KEY
			).toString();
		}
		try {
			const updateUser = await User.findByIdAndUpdate(
				id,
				{ $set: req.body },
				{ new: true }
			);
			if (!updateUser)
				return res.status(NotFound_Code).json({ message: NotFound });
			const { password, ...info } = updateUser._doc;
			return res.status(Ok_Code).json({ Ok, info });
		} catch (error) {
			return res
				.status(InternalServer_Code)
				.json({ InternalServer, error });
		}
	} else {
		return res
			.status(Validation_Code)
			.json({ message: "You Can Update Your Account Only." });
	}
});

////// Delete User \\\\\\
router.delete("/:id", authorization, async (req, res) => {
	const { id, isAdmin } = req.user;
	if (id === req.params.id || isAdmin) {
		try {
			userById = await User.findByIdAndDelete(req.params.id);
			if (!userById)
				return res.status(NotFound_Code).json({ message: NotFound });
			return res.status(Ok_Code).json({ message: "User Deleted " + Ok });
		} catch (error) {
			res.status(InternalServer_Code).json({
				message: "User Deleted " + InternalServer,
				error: error.message,
			});
		}
	} else {
		return res
			.status(Validation_Code)
			.json({ message: "You Can Delete Your Account Only." });
	}
});

////// Get One User \\\\\\
router.get("/find/:id", async (req, res) => {
	req.params.id;
	try {
		userById = await User.findById(req.params.id);
		if (!userById) return res.status(NotFound_Code).json({ message: NotFound });
		const { password, ...info } = userById._doc;
		return res.status(Ok_Code).json({ Ok, info });
	} catch (error) {
		res
			.status(InternalServer_Code)
			.json({ message: InternalServer, error: error.message });
	}
});

////// Get All User \\\\\\
router.get("/", authorization, async (req, res) => {
	const query = req.query.new;
	if (req.user.isAdmin) {
		try {
			const allUsers = query
				? await User.find().sort({ _id: -1 }).limit(10)
				: await User.find();
			return res.status(Ok_Code).json({ allUsers });
		} catch (error) {
			return res
				.status(InternalServer_Code)
				.json({ message: InternalServer, erro: error.message });
		}
	} else {
		return res.status(Validation_Code).json({ message: "Only Admin Can View" });
	}
});

////// Get User Stats \\\\\\
router.get("/stats", async (req, res) => {
	const today = new Date();
	const lastYear = today.setFullYear(today.setFullYear() - 1);
	const monthsArray = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	try {
		const data = await User.aggregate([
			{ $project: { month: { $month: "$createdAt" } } },
			{ $group: { _id: "$month", total: { $sum: 1 } } },
		]);
		return res.status(Ok_Code).json({ data });
	} catch (error) {
		return res
			.status(InternalServer_Code)
			.json({ message: InternalServer, error });
	}
});

module.exports = router;
