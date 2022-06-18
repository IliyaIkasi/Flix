import "./sidebar.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link } from "react-router-dom";

const SideBar = () => {
	return (
		<div className="sidebar-section">
			<div className="top-container">
				<Link to="/" style={{ textDecoration: "none" }}>
					<span className="logo-image">Flix Admin</span>
				</Link>
			</div>
			<div className="center-container">
				<ul>
					<div className="center-wrapper">
						<p className="center-title">Dashboard</p>
						<Link to="/" style={{ textDecoration: "none" }}>
							<li>
								<DashboardOutlinedIcon className="center-icons" />
								<span>Dashboard</span>
							</li>
						</Link>
					</div>
					<div className="center-wrapper">
						<p className="center-title">Products</p>
						<Link
							to="/users"
							style={{ textDecoration: "none", color: "black" }}
						>
							<li>
								<PersonOutlineOutlinedIcon className="center-icons" />

								<span>Users</span>
							</li>
						</Link>
						<Link
							to="/movies"
							style={{ textDecoration: "none", color: "black" }}
						>
							<li>
								<PlayCircleOutlineIcon className="center-icons" />
								<span>Movie</span>
							</li>
						</Link>
						<li>
							<CreditCardOutlinedIcon className="center-icons" />
							<span>Orders</span>
						</li>
						<li>
							<LocalShippingOutlinedIcon className="center-icons" />
							<span>Delivery</span>
						</li>
					</div>
					<div className="center-wrapper">
						<p className="center-title">Statistics</p>
						<li>
							<AssessmentOutlinedIcon className="center-icons" />
							<span>Stats</span>
						</li>
						<li>
							<NotificationsActiveOutlinedIcon className="center-icons" />
							<span>Notifications</span>
						</li>
					</div>
					<div className="center-wrapper">
						<p className="center-title">Service</p>
						<li>
							<SettingsSystemDaydreamOutlinedIcon className="center-icons" />
							<span>System Health</span>
						</li>
						<li>
							<PsychologyOutlinedIcon className="center-icons" />
							<span>Logs</span>
						</li>
						<li>
							<SettingsOutlinedIcon className="center-icons" />
							<span>Settings</span>
						</li>
					</div>
					<div className="center-wrapper">
						<p className="center-title">Account</p>
						<li>
							<AccountBoxOutlinedIcon className="center-icons" />
							<span>Profile</span>
						</li>
						<li>
							<LogoutOutlinedIcon className="center-icons" />
							<span>Logout</span>
						</li>
					</div>
				</ul>
			</div>
			<div className="bottom-container">
				<ul>
					<p className="theme-title">Themes</p>
					<div className="theme-options">
						<div className="theme-type light">
							<LightModeIcon />
						</div>
						<div className="theme-type dark">
							<DarkModeIcon />
						</div>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
