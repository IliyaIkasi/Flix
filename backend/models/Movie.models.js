const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		desc: { type: String },
		img: { type: String, default: "image.jpg" },
		imgTitle: { type: String },
		imgSm: { type: String },
		trailer: { type: String },
		video: { type: String, required: true },
		year: { type: String },
		limit: { type: Number },
		genre: { type: String, required: true },
		isSeries: { type: Boolean, default: false },
	},
	{ timestamps: true }
);
const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
