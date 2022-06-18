import "./new.scss";
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import dummyImage from "../../medias/no-image.jpg";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ title }) => {
	const [user, setUser] = useState(null);
	const [image, setImage] = useState(null);
	const [uploaded, setUploaded] = useState(0);
	const handleChange = (e) => {
		e.preventDefault();
		const value = e.target.value;
		setUser({ ...user, [e.target.value]: value });
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
							alt={dummyImage}
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
								<label>Username</label>
								<input
									type="text"
									placeholder="Title"
									onChange={handleChange}
								/>
							</div>
							<div className="form-input">
								<label>Email</label>
								<input
									type="text"
									placeholder="Title"
									onChange={handleChange}
								/>
							</div>
							<div className="form-input">
								<label>Admin</label>
								<select name="isAdmin" id="isAdmin" onChange={handleChange}>
									<option value="false">No</option>
									<option value="true">Yes</option>
								</select>
							</div>
							{uploaded === 2 ? (
								<button type="submit" className="submit-button">
									Send
								</button>
							) : (
								<button type="submit" className="submit-button">
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
