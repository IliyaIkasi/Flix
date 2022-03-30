const express = require("express");
const router = express();
const User = require("../models/User.models");
const CryptoJS = require("crypto-js");
const {
	Validation,
	Validation_Code,
	InternalServer,
	InternalServer_Code,
	Bad_Request,
	Exists,
	Ok,
	Ok_Code,
} = require("../Status/StatusCode");

////// Register New User \\\\\\
router.post("/register", async (req, res) => {
	const { username, email, password } = req.body;
	const { error } = req.body;
	if (error)
		return res.status(401).json({ message: "error => " + error.details });

	const userByUsername = await User.findOne({ username });
	const userByEmail = await User.findOne({ email });
	if (userByUsername || userByEmail)
		return res.status(Bad_Request).json({ message: Exists });

	const hashPassword = CryptoJS.AES.encrypt(
		password,
		process.env.PASSWORD_SECRET_KEY
	).toString();
	const newUser = {
		username,
		email,
		password: hashPassword,
	};
	let user = new User(newUser);
	try {
		user = await user.save();
		const { password, ...info } = user._doc;
		return res.status(Ok_Code).json({
			message: Ok,
			info,
		});
	} catch (error) {
		return res
			.status(InternalServer_Code)
			.json({ message: InternalServer, error });
	}
});

////// Login User \\\\\\
router.post("/login", async (req, res) => {
	const { email, password } = req.body;

	const userByEmail = await User.findOne({ email });
	if (!userByEmail)
		return res.status(Validation_Code).json({ message: Validation });

	const bytes = CryptoJS.AES.decrypt(
		userByEmail.password,
		process.env.PASSWORD_SECRET_KEY
	);
	const validPassword = bytes.toString(CryptoJS.enc.Utf8);
	if (password != validPassword)
		return res.status(Validation_Code).json({ message: Validation });

	const token = userByEmail.generateAuthToken();

	try {
		const { password, ...info } = userByEmail._doc;
		return res.status(Ok_Code).json({ message: Ok, info, token });
	} catch (err) {
		console.log("Login Error " + err);
		return res.status(InternalServer_Code).json({ message: InternalServer });
	}
});

module.exports = router;
