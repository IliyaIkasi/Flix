import "./single.scss";
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Single = () => {
	const location = useLocation();
	const user = location.state.state;
	const [image, setImage] = useState("");
	return (
		<div className="single-section">
			<SideBar />
			<div className="single-container">
				<NavBar />
				<div className="top-content">
					<div className="top-left">
						<Link to="/users/new" className="">
							<div className="editButton">Edit</div>
						</Link>
						<div className="left-title title">Information</div>
						<div className="left-item">
							<img
								src={`http://localhost:4000/${user.profilePic}`}
								alt={`http://localhost:4000/${user.profilePic}`}
								className="itemImg"
							/>
							<div className="left-details">
								<div className="detail-title">{user.username}</div>
								<div className="left-details-item">
									<div className="detail-Item">
										<span className="item-key">ID:</span>
										<span className="item-value">{user._id}</span>
									</div>
									<div className="detail-Item">
										<span className="item-key">Username:</span>
										<span className="item-value">{user.username}</span>
									</div>
									<div className="detail-Item">
										<span className="item-key">Email:</span>
										<span className="item-value">{user.email}</span>
									</div>
									<div className="detail-Item">
										<span className="item-key">Admin:</span>
										<span className="item-value">{user.isAdmin}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bottom-content">
					<div className="bottom-left">
						<img
							src={
								image
									? URL.createObjectURL(image)
									: `http://localhost:4000/${user.profilePic}`
							}
							alt={`http://localhost:4000/${user.profilePic}`}
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
								<label>ID</label>
								<input type="text" placeholder={user._id} disabled />
							</div>
							<div className="form-input">
								<label>Username</label>
								<input type="text" placeholder={user.username} />
							</div>
							<div className="form-input">
								<label>Email</label>
								<input type="text" placeholder={user.email} />
							</div>
							<div className="form-input">
								<label>Admin</label>
								<select name="isAdmin" id="isAdmin">
									<option value="false">No</option>
									<option value="true">Yes</option>
								</select>
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
