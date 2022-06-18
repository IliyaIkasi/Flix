import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
	const progressBar = 50;
	return (
		<div className="featured-section">
			<div className="top-container">
				<h1 className="top-title">Total Revenue</h1>
				<MoreVertIcon className="top-icon" />
			</div>
			<div className="bottom-container">
				<div className="featured-progressbar">
					<CircularProgressbar
						value={progressBar}
						text={progressBar + "%"}
						strokeWidth={5}
					/>
				</div>
				<p className="bottom-title">Total Sales</p>
				<p className="bottom-amount">$230</p>
				<p className="bottom-desc">
					Previous Transactions Processing.
					<br />
					Last Payments May Not Be Included.
				</p>
				<div className="bottom-summary">
					<div className="summary-item">
						<div className="item-title">Target</div>
						<div className="item-result negative">
							<KeyboardArrowDownIcon />
							<div className="result-amount">$350.2k</div>
						</div>
					</div>
					<div className="summary-item">
						<div className="item-title">Last Week</div>
						<div className="item-result positive">
							<KeyboardArrowUpIcon />
							<div className="result-amount">$350.2k</div>
						</div>
					</div>
					<div className="summary-item">
						<div className="item-title">Last Month</div>
						<div className="item-result negative">
							<KeyboardArrowDownIcon />
							<div className="result-amount">$350.2k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
