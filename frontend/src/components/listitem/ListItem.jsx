import "./listitem.scss";
import React, { useEffect, useState } from "react";
import {
	PlayArrow,
	Add,
	ThumbUpAltOutlined,
	ThumbDownAltOutlined,
} from "@material-ui/icons";
import axios from "axios";
// import { } from "../../medias/images";

const ListItem = ({ item }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [movie, setMovie] = useState({});

	useEffect(() => {
		const getMovies = async () => {
			try {
				const res = await axios.get(
					"http://localhost:4000/flix/movies/find/" + item,
					{
						headers: {
							"flix-token":
								"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzFhYjBhZDVhMWI3YTg3ZjIzNTBjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODI0MjUxNiwiZXhwIjoxNjQ4Njc0NTE2fQ.nKNjsU5tgR93Wm882WU80Po0kIUYc_P_AJJbAv94R4k",
						},
					}
				);
				setMovie(res.data.movie);
			} catch (error) {
				console.log(error.message);
			}
		};
		getMovies();
	}, [item]);

	return (
		<div
			className="listitem-container"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			
		>
			<img src={movie.img} alt={movie.img} />
			{isHovered && (
				<>
					<video
						src={movie.trailer}
						alt={movie.trailer}
						autoPlay={true}
						loop={true}
					></video>
					<div className="listitem-info">
						<div className="listitem-info-icons">
							<PlayArrow className="icon" />
							<Add className="icon" />
							<ThumbUpAltOutlined className="icon" />
							<ThumbDownAltOutlined className="icon" />
						</div>
						<div className="listitem-info-dpy">
							<span>{movie.duration}</span>
							<span>{movie.limit}</span>
							<span>{movie.year}</span>
						</div>
					</div>
					<div className="listitem-desc">
						<p>{movie.title}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default ListItem;
