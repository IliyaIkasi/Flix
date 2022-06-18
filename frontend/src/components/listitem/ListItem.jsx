import "./listitem.scss";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	PlayArrow,
	Add,
	ThumbUpAltOutlined,
	ThumbDownAltOutlined,
} from "@material-ui/icons";
import { MovieContext } from "../../context/movie_context/MovieContext";
import { getOneMovies } from "../../context/movie_context/MovieApiCalls";

const ListItem = ({ id }) => {
	const [isHovered, setIsHovered] = useState(false);
	const { movies, dispatch } = useContext(MovieContext);
	console.log(movies);

	useEffect(() => {
		const getOneMovie = (id) => {
			getOneMovies(id, dispatch);
		};
		getOneMovie(id);
	}, [id, dispatch]);

	return (
		<div
			className="listitem-container"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img src={`http://localhost:4000/${movies.img}`} alt={movies.imgTitle} />
			{isHovered && (
				<>
					<Link to="/watch" state={{ movie: movies }}>
						<video
							src={`http://localhost:4000/${movies.trailer}`}
							alt={`http://localhost:4000/${movies.trailer}`}
							autoPlay={true}
							loop
						></video>
					</Link>
					<div className="listitem-info">
						<div className="listitem-info-icons">
							<PlayArrow className="icon" />
							<Add className="icon" />
							<ThumbUpAltOutlined className="icon" />
							<ThumbDownAltOutlined className="icon" />
						</div>
						<div className="listitem-info-dpy">
							<span>{movies.duration}</span>
							<span>+{movies.limit}</span>
							<span>{movies.year}</span>
						</div>
					</div>
					<div className="listitem-desc">
						<p>{movies.desc}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default ListItem;
