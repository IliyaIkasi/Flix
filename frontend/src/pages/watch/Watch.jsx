import "./watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
	const location = useLocation();
	const movie = location.state.movie;
	return (
		<div className="watch-container">
			<Link to="/">
				<div className="back-btn">
					<ArrowBackOutlined />
					<p>Home</p>
				</div>
			</Link>
			<video src={`http://localhost:4000/${movie.trailer}`} autoPlay controls progress="true"></video>
		</div>
	);
};

export default Watch;
