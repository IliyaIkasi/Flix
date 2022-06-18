import "./navbar.scss";
import profile_img from "../../medias/profile-img.jpg";
import SearchIcon from "@mui/icons-material/Search";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { logout } from "../../context/auth_context/AuthApiCalls";

const NavBar = () => {
	const handleLogout = (e) => {
		e.preventDefault();
		logout();
	};
	return (
		<div className="navbar-section">
			<div className="navbar-wrapper">
				<div className="search-container">
					<div className="search-hover">
						<input
							type="search"
							name="navbar-search"
							id="navbar-search"
							placeholder="Search..."
						/>
					</div>
					<div className="search-hover">
						<SearchIcon className="search-icon" />
					</div>
				</div>
				<div className="navbar-items">
					<div className="items">
						<LanguageOutlinedIcon className="items-icon" />
						English
					</div>
					<div className="items">
						<DarkModeOutlinedIcon className="items-icon" />
					</div>
					<div className="items">
						<FullscreenExitOutlinedIcon className="items-icon" />
					</div>
					<div className="items">
						<NotificationsNoneOutlinedIcon className="items-icon" />
						<div className="counter">1</div>
					</div>
					<div className="items">
						<ChatBubbleOutlineOutlinedIcon className="items-icon" />
						<div className="counter">2</div>
					</div>
					<div className="items">
						<img src={profile_img} alt={profile_img} />
					</div>
					<div className="items">
						<ListOutlinedIcon className="items-icon" onClick={handleLogout} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
