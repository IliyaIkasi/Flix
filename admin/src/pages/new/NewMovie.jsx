import "./new.scss";
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import dummyImage from "../../medias/no-image.jpg";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useContext, useState } from "react";
import axios from "axios";
import { createMovie } from "../../context/movie_context/MovieApiCalls";
import { MovieContext } from "../../context/movie_context/MovieContext";

const New = ({ title }) => {
	const [movie, setMovie] = useState(null);
	const [image, setImage] = useState(null);
	const [imageTitle, setImageTitle] = useState(null);
	const [imageSm, setImageSm] = useState(null);
	const [video, setVideo] = useState(null);
	const [trailer, setTrailer] = useState(null);
	const [uploaded, setUploaded] = useState(0);
	const { dispatch } = useContext(MovieContext);

	const handleUpload = (e) => {
		e.preventDefault();
		setMovie({ ...movie, [e.target.name]: e.target.value });
	};
	console.log(movie);

	// const handleUpload = (e) => {
	// 	e.preventDefault();
	// 	upload([
	// 		{ file: image, label: "img" },
	// 		{ file: imageTitle, label: "imgTitle" },
	// 		{ file: imageSm, label: "imgSm" },
	// 		{ file: trailer, label: "trailer" },
	// 		{ file: video, label: "video" },
	// 	]);
	// };

	const uploadFile = (e) => {
		e.preventDefault();
		createMovie(movie, dispatch);
	};

	return (
		<div className="new-section">
			<SideBar />
			<div className="new-container">
				<NavBar />
				<div className="top-content">{title}</div>
				<div className="bottom-content">
					<div className="bottom-left">
						<img
							src={image ? URL.createObjectURL(image) : dummyImage}
							alt={"dummyImage"}
						/>
						<video
							src={video ? URL.createObjectURL(video) : dummyImage}
							alt={"dummyImage"}
						/>
					</div>
					<div className="bottom-right">
						<form action="" method="post" className="form">
							<div className="form-input">
								<label htmlFor="image">
									Image: <DriveFolderUploadOutlinedIcon className="form-icon" />
								</label>
								<input type="file" name="img" onChange={handleUpload} />
							</div>
							<div className="form-input">
								<label htmlFor="video">
									Video: <DriveFolderUploadOutlinedIcon className="form-icon" />
								</label>
								<input type="file" name="video" onChange={handleUpload} />
							</div>
							<div className="form-input">
								<label>Title Image:</label>
								<input type="file" name="imgTitle" onChange={handleUpload} />
							</div>
							<div className="form-input">
								<label>Thumbnail Image:</label>
								<input type="file" name="imgSm" onChange={handleUpload} />
							</div>
							<div className="form-input">
								<label>Trailer:</label>
								<input type="file" name="trailer" onChange={handleUpload} />
							</div>
							<div className="form-input">
								<label>Title</label>
								<input
									type="text"
									placeholder="Title"
									name="title"
									onChange={handleUpload}
								/>
							</div>
							<div className="form-input">
								<label>Description</label>
								<input
									type="text"
									placeholder="Description"
									name="desc"
									onChange={handleUpload}
								/>
							</div>
							<div className="form-input">
								<label>Genre</label>
								<input
									type="text"
									placeholder="Genre"
									name="genre"
									onChange={handleUpload}
								/>
							</div>
							<div className="form-input">
								<label>Duration</label>
								<input
									type="text"
									placeholder="Duration"
									name="duration"
									onChange={handleUpload}
								/>
							</div>
							<div className="form-input">
								<label>Year</label>
								<input
									type="text"
									placeholder="Year"
									name="year"
									onChange={handleUpload}
								/>
							</div>
							<div className="form-input">
								<label>Limit</label>
								<input
									type="text"
									placeholder="Limit"
									name="limit"
									onChange={handleUpload}
								/>
							</div>
							<div className="form-input">
								<label>Series?</label>
								<select name="isSeries" id="isSeries" onChange={handleUpload}>
									<option value="false" placeholder="false">
										No
									</option>
									<option value="true" placeholder="true">
										Yes
									</option>
								</select>
							</div>
							{uploaded === 6 ? (
								<button type="submit" className="submit-button">
									Send
								</button>
							) : (
								<button
									type="submit"
									className="submit-button"
									onClick={uploadFile}
								>
									Upload
								</button>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
