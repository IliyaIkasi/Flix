import "./components/style/dark.scss";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NewUser from "./pages/new/NewUser";
import NewMovie from "./pages/new/NewMovie";
import UserSingle from "./pages/single/UserSingle";
import MovieSingle from "./pages/single/MovieSingle";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/auth_context/AuthContext";
import { MovieContext } from "./context/movie_context/MovieContext";
import { UserContext } from "./context/user_context/UserContext";
import { useContext } from "react";

const App = () => {
	const { user } = useContext(AuthContext);
	const { movies, dispatch: movieDispatch } = useContext(MovieContext);
	const { users, dispatch: userDispatch } = useContext(UserContext);

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route
							index
							element={user ? <Home /> : <Navigate replace to="/login" />}
						/>
						<Route
							path="login"
							element={!user ? <Login /> : <Navigate replace to="/" />}
						/>
						<Route
							path="register"
							element={!user ? <Register /> : <navigate replace to="/" />}
						/>
						<Route path="users">
							<Route
								index
								element={
									<List
										context={users}
										dispatch={userDispatch}
										title="Latest User"
										link="users"
									/>
								}
							/>
							<Route path=":userId" element={<UserSingle link="users" />} />
							<Route
								path="new"
								element={<NewUser title="Add New User" link="users" />}
							/>
						</Route>
						<Route path="movies">
							<Route
								index
								element={
									<List
										context={movies}
										dispatch={movieDispatch}
										title="Latest Movie"
										link="movies"
									/>
								}
							/>
							<Route path=":moviesId" element={<MovieSingle link="movies" />} />
							<Route
								path="new"
								element={<NewMovie title="Add New Movie" link="movies" />}
							/>
						</Route>
					</Route>
					<Route path="*" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
