import "./home.scss";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useLocation, matchRoutes } from "react-router-dom";
import axios from "axios";

const Home = () => {
	const routes = [{ path: "" }, { path: "Movie" }, { path: "Series" }];
	const location = useLocation();
	const locate = location.pathname;
	const [{ route }] = matchRoutes(routes, locate);
	const type = route.path;

	const [lists, setLists] = useState([]);
	const [genre, setGenre] = useState(null);
	const [error, setError] = useState("");
	useEffect(() => {
		const getRandomlist = async () => {
			const url = `http://localhost:4000/flix/list${
				type ? "?type=" + type : ""
			}${genre ? "&genre=" + genre : ""}`;
			try {
				const res = await axios.get(url, {
					headers: {
						"flix-token": JSON.parse(localStorage.getItem("user-front")).token,
					},
				});
				setLists(res.data.list);
			} catch (error) {
				setError(error.message);
			}
		};
		getRandomlist();
	}, [type, genre]);

	return (
		<div className="home-page">
			<NavBar />
			<Featured type={type} />
			<div className="list-content">
				{lists.map((list) => (
					<List list={list} key={list._id} />
				))}
			</div>
		</div>
	);
};

export default Home;
