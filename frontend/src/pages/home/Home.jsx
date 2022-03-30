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
						"flix-token":
							"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzFhYjBhZDVhMWI3YTg3ZjIzNTBjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODI0MjUxNiwiZXhwIjoxNjQ4Njc0NTE2fQ.nKNjsU5tgR93Wm882WU80Po0kIUYc_P_AJJbAv94R4k",
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
			{lists.map((list) => (
				<List list={list} key={list._id} title={list.title} />
			))}
		</div>
	);
};

export default Home;
