import "./home.scss";
import React from "react";
import WidgetSm from "../../components/widget-sm/WidgetSm";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import WidgetTable from "../../components/widget-table/WidgetTable";

const Home = () => {
	const MONTHS = useMemo(
		() => [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sept",
			"Oct",
			"Nov",
			"Dec",
		],
		[]
	);

	const [userStats, setUserStats] = useState([]);

	useEffect(() => {
		const getStats = async () => {
			try {
				const res = await axios.get("http://localhost:4000/flix/users/stats", {
					headers: {
						"flix-token": JSON.parse(localStorage.getItem("user")).token,
					},
				});
				// const statsList = res.data.data.sort(function (a, b) {
				// 	return a._id - b._id;
				// });
				res.data.data.map((item) => {
					setUserStats((prev) => [
						...prev,
						{
							name: MONTHS[item._id - 1],
							"New User": item.total,
						},
					]);
				});
			} catch (error) {
				console.log(error.message);
			}
		};
		getStats();
	}, [MONTHS]);

	return (
		<div className="home-section">
			<SideBar />
			<div className="home-container">
				<NavBar />
				<div className="widget-content">
					<Widget type="user" />
					<Widget type="order" />
					<Widget type="earning" />
					<Widget type="balance" />
				</div>
				<div className="charts-content">
					<Featured />
					<Chart
						data={userStats}
						dataKey="New User"
						title="User Analytics"
						aspect={2 / 1}
					/>
				</div>
				<div className="list-content">
					<div className="user-table">
						<WidgetSm title="New Join Customers" test="users" />
					</div>
					<div className="list-table">
						<div className="list-title">Latest Transactions</div>
						<WidgetTable width="400" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
