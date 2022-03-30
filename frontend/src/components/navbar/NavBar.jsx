import "./navbar.scss";
import React from "react";
import flix from "../../medias/images/flix.jpg";
import profile_img from "../../medias/images/profile-img.jpg";
import { ArrowDropDownSharp, Notifications, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

const NavBar = () => {
	// const { isScrolled, setIsScrolled } = useState(false);
	// useEffect(() => {
	// 	window.onscroll = () => {
	// 		setIsScrolled(window.pageYOffset === 0 ? false : true);
	// 	};
	// 	return () => (window.onscroll = null);
	// }, [setIsScrolled]);
	// console.log(isScrolled);

	return (
		<div className="navbar">
			<div className="navbar-container">
				<div className="left">
					<img src={flix} alt={flix} />
					<Link to="/" className="nav-link">
						<span>Homepage</span>
					</Link>
					<Link to="/Series" className="nav-link">
						<span>Series</span>
					</Link>
					<Link to="/Movie" className="nav-link">
						<span>Movies</span>
					</Link>
					<Link to="/" className="nav-link">
						<span>New and Popular</span>
					</Link>
					<Link to="/" className="nav-link">
						<span>My List</span>
					</Link>
				</div>
				<div className="right">
					<Search className="icon" />
					<span>KID</span>
					<Notifications className="icon" />
					<img src={profile_img} alt={profile_img} />
					<div className="profile-container">
						<ArrowDropDownSharp className="icon" />
						<div className="profile-options">
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
