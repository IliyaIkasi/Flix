import "./single.scss";
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Single = ({ link }) => {
	const location = useLocation();
	const movie = location.state.state;
	const [image, setImage] = useState("");
	const [video, setVideo] = useState("");
	return (
		<div className="single-section">
			<SideBar />
			<div className="single-container">
				<NavBar />
				<div className="top-content">
					<div className="top-left">
						<Link to={`/${link}/new`} className="">
							<div className="editButton">Edit</div>
						</Link>
						<div className="left-title title">Information</div>
						<div className="left-item">
							<img
								src={`http://localhost:4000/${movie.img}`}
								alt={`http://localhost:4000/${movie.img}`}
								className="itemImg"
							/>
							<div className="left-details">
								<div className="detail-title">{movie.title}</div>
								<div className="left-details-item">
									<div className="detail-Item">
										<span className="item-key">ID:</span>
										<span className="item-value">{movie._id}</span>
									</div>
									<div className="detail-Item">
										<span className="item-key">Genre:</span>
										<span className="item-value">{movie.genre}</span>
									</div>
									<div className="detail-Item">
										<span className="item-key">Year:</span>
										<span className="item-value">{movie.year}</span>
									</div>
									<div className="detail-Item">
										<span className="item-key">Limit:</span>
										<span className="item-value">{movie.limit}</span>
									</div>
								</div>
								<div className="left-details-item">
									<div className="detail-Item">
										<span className="item-key">Duration:</span>
										<span className="item-value">{movie.duration}</span>
									</div>
									<div className="detail-Item">
										<span className="item-key">Series:</span>
										<span className="item-value">{movie.isSeries}</span>
									</div>
									<div className="detail-Item">
										<span className="item-key">Description:</span>
										<span className="item-value">{movie.desc}</span>
									</div>
								</div>
							</div>
							<video
								src={`http://localhost:4000/${movie.video}`}
								alt={`http://localhost:4000/${movie.video}`}
								className="itemVideo"
							/>
						</div>
					</div>
				</div>
				<div className="bottom-content">
					<div className="bottom-left">
						<img
							src={
								image
									? URL.createObjectURL(image)
									: `http://localhost:4000/${movie.img}`
							}
							alt={`http://localhost:4000/${movie.img}`}
						/>
						<video
							src={
								video
									? URL.createObjectURL(video)
									: `http://localhost:4000/${movie.video}`
							}
							alt={`http://localhost:4000/${movie.video}`}
						/>
					</div>
					<div className="bottom-right">
						<form action="" method="post" className="form">
							<div className="form-input">
								<label htmlFor="image">
									Image: <DriveFolderUploadOutlinedIcon className="form-icon" />
								</label>
								<input
									type="file"
									id="image"
									onChange={(e) => setImage(e.target.files[0])}
								/>
							</div>
							<div className="form-input">
								<label htmlFor="video">
									Video: <DriveFolderUploadOutlinedIcon className="form-icon" />
								</label>
								<input
									type="file"
									id="video"
									onChange={(e) => setVideo(e.target.files[0])}
								/>
							</div>
							<div className="form-input">
								<label>Title</label>
								<input type="text" placeholder={movie.title} />
							</div>
							<div className="form-input">
								<label>ID</label>
								<input type="text" placeholder={movie._id} disabled />
							</div>
							<div className="form-input">
								<label>Genre</label>
								<input type="text" placeholder={movie.genre} />
							</div>
							<div className="form-input">
								<label>Year</label>
								<input type="text" placeholder={movie.year} />
							</div>
							<div className="form-input">
								<label>Limit</label>
								<input type="text" placeholder={movie.limit} />
							</div>
							<div className="form-input">
								<label>Duration</label>
								<input type="text" placeholder={movie.duration} />
							</div>
							<div className="form-input">
								<label>Series</label>
								<input type="text" placeholder={movie.isSeries} />
							</div>
							<div className="form-input">
								<label>Description</label>
								<input type="text" placeholder={movie.desc} />
							</div>
						</form>
						<button type="submit" className="submit-button">
							Send
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Single;
