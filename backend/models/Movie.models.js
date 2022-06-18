const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		desc: { type: String, required: true },
		img: { type: String },
		imgTitle: { type: String, required: true },
		imgSm: { type: String, required: true },
		trailer: { type: String },
		video: { type: String },
		duration: { type: String, required: true },
		year: { type: String, required: true },
		limit: { type: Number, required: true },
		genre: { type: String, required: true },
		isSeries: { type: Boolean, default: false },
	},
	{ timestamps: true }
);
const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
