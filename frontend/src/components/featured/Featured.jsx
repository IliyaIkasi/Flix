import "./featured.scss";
import React, { useEffect } from "react";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { slideshow } from "../../data";

const Featured = ({ type }) => {
	useEffect(() => {
		var slideIndex = 0;
		showSlides();
		featSlides();

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
	}, []);

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
			{slideshow.map((item) => (
				<React.Fragment key={item.id}>
					<div className="featured-slideshow">
						<div className="mySlides fade">
							<div className="number-text" number={item.id}></div>
							<img key={item.id} src={item.image} alt={item.image} />
						</div>
					</div>
				</React.Fragment>
			))}
			<div className="featured-info">
				{slideshow.map((item) => (
					<React.Fragment key={item.id}>
						<div className="myfeatured fade">
							<img key={item.id} src={item.feat} alt={item.feat} />
							<span className="info-desc">{item.desc}</span>
						</div>
					</React.Fragment>
				))}
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
	);
};

export default Featured;
