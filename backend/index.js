const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/User.routes");
const mediaRouter = require("./routes/Media.routes");
const movieRouter = require("./routes/Movie.routes");
const listRouter = require("./routes/List.routes");
const cors = require("cors");
dotenv.config();

mongoose
	.connect("mongodb://localhost/netflix", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log("Couldn't connect to MongoDB => " + err));

//Middleware
app.use(express.json());
app.use(cors({ credentials: true }));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/flix/auth", authRouter);
app.use("/flix/users", userRouter);
app.use("/flix/", mediaRouter);
app.use("/flix/movies", movieRouter);
app.use("/flix/list", listRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port => ${port}`);
});
