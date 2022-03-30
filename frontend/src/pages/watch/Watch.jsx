import "./watch.scss";
import video from "../../medias/videos/Mr-Robot.mp4";
import { ArrowBackOutlined } from "@material-ui/icons";

const Watch = () => {
	return (
		<div className="watch-container">
			<div className="back-btn">
				<ArrowBackOutlined />
				<p>Home</p>
			</div>
			<video
				src={video}
				autoPlay={true}
				controls={true}
				onProgress={true}
			></video>
		</div>
	);
};

export default Watch;
