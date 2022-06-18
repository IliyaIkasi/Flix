const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		profilePic: { type: String },
		isAdmin: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

UserSchema.methods.generateAuthToken = function () {
	const token = jwt.sign(
		{ id: this._id, isAdmin: this.isAdmin },
		process.env.JWT_SECRET_KEY,
		{ expiresIn: "5d" }
	);
	return token;
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
