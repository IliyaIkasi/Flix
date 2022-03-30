const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/User.routes");
const imagesRouter = require("./routes/Images.routes");
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

app.use(express.json());
app.use(cors({ credentials: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/flix/auth", authRouter);
app.use("/flix/users", userRouter);
app.use("/flix/", imagesRouter);
app.use("/flix/", imagesRouter);
app.use("/flix/movies", movieRouter);
app.use("/flix/list", listRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port => ${port}`);
});
