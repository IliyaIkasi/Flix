import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widgets = ({ type }) => {
	let data;
	const amount = 1000;
	const percent = 10;
	switch (type) {
		case "user":
			data = {
				title: "USERS",
				isMoney: false,
				link: "See all users",
				icon: (
					<PersonOutlinedIcon
						className="person-icon"
						style={{
							color: "crimson",
							backgroundColor: "rgba(255, 0, 0, 0.2)",
						}}
					/>
				),
			};
			break;
		case "order":
			data = {
				title: "ORDERS",
				isMoney: false,
				link: "View all orders",
				icon: (
					<ShoppingCartOutlinedIcon
						className="person-icon"
						style={{
							color: "goldenrod",
							backgroundColor: "rgba(218, 165, 32, 0.2)",
						}}
					/>
				),
			};
			break;
		case "earning":
			data = {
				title: "EARNINGS",
				isMoney: true,
				link: "View net earnings",
				icon: (
					<MonetizationOnOutlinedIcon
						className="person-icon"
						style={{
							color: "green",
							backgroundColor: "rgba(0, 128, 0, 0.2)",
						}}
					/>
				),
			};
			break;
		case "balance":
			data = {
				title: "BALANCE",
				isMoney: false,
				link: "See details",
				icon: (
					<AccountBalanceWalletOutlinedIcon
						className="person-icon"
						style={{
							color: "purple",
							backgroundColor: "rgba(129, 0, 128, 0.2)",
						}}
					/>
				),
			};
			break;

		default:
			break;
	}
	return (
		<div className="widget-container">
			<div className="widget-left">
				<div className="widget-title">{data.title}</div>
				<div className="widget-counter">
					{data.isMoney && "$"}
					{amount}
				</div>
				<div className="widget-link">{data.link}</div>
			</div>
			<div className="widget-right">
				<div className="widget-percentage positive">
					<KeyboardArrowUpIcon />
					{percent}%
				</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widgets;
