import "./featured.scss";
import React, { useContext, useEffect } from "react";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { MovieContext } from "../../context/movie_context/MovieContext";
import { getRandomMovies } from "../../context/movie_context/MovieApiCalls";
import { matchRoutes, useLocation } from "react-router-dom";

const Featured = () => {
	const routes = [{ path: "" }, { path: "Movie" }, { path: "Series" }];
	const location = useLocation();
	const locate = location.pathname;
	const [{ route }] = matchRoutes(routes, locate);
	const type = route.path;

	const { movies, dispatch } = useContext(MovieContext);
	const url = "http://localhost:4000/";

	useEffect(() => {
		var slideIndex = 0;

		function showSlides() {
			var i;
			var slides = document.getElementsByClassName("mySlides");
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			slideIndex++;
			if (slideIndex > slides.length) {
				slideIndex = 1;
			}
			slides[slideIndex - 1].style.display = "block";
			setTimeout(showSlides, 10000); // Change image every 10 seconds
		}

		function featSlides() {
			var i;
			var featured = document.getElementsByClassName("myfeatured");
			for (i = 0; i < featured.length; i++) {
				featured[i].style.display = "none";
			}
			slideIndex++;
			if (slideIndex > featured.length) {
				slideIndex = 1;
			}
			featured[slideIndex - 1].style.display = "block";
			setTimeout(featSlides, 10000); // Change image every 10 seconds
		}
		showSlides();
		featSlides();
	}, [type]);

	useEffect(() => {
		const getRandomContent = (type) => {
			getRandomMovies(type, dispatch);
		};
		getRandomContent();
	}, [type, dispatch]);

	return (
		<div className="featured-container">
			{type && (
				<div className="featured-category">
					<span>{type === "Movie" ? "Movies" : "Series"}</span>
					<select name="genre" id="genre">
						<option value="adventure">Adventure</option>
						<option value="comedy">Comedy</option>
						<option value="crime">Crime</option>
						<option value="fantasy">Fantasy</option>
						<option value="historical">Historical</option>
						<option value="horror">Horror</option>
						<option value="romance">romance</option>
						<option value="sci-fi">Sci-fi</option>
						<option value="thriller">Thriller</option>
						<option value="romance">Romance</option>
						<option value="western">Western</option>
						<option value="animation">Animation</option>
						<option value="drama">Drama</option>
						<option value="documentary">Documentary</option>
					</select>
				</div>
			)}
			<div key={movies._id}>
				<div className="featured-slideshow">
					<div className="mySlides fade">
						<img src={url + movies.img} alt={movies.title} />
					</div>
				</div>
				<div className="featured-info">
					<div className="myfeatured fade">
						<span className="info-title">{movies.title}</span>
						<img src={url + movies.img} alt={movies.title} />
						<span className="info-desc">{movies.desc}</span>
					</div>

					<div className="info-buttons">
						<button className="btn-play">
							<PlayArrow />
							<span>Play</span>
						</button>
						<button className="btn-more">
							<InfoOutlined />
							<span>Info</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
