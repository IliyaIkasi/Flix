import "./App.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/auth_context/AuthContext";

const App = () => {
	const { user } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route
						path="/"
						element={user ? <Home /> : <Navigate replace to="/login" />}
					/>
					<Route
						path="/login"
						element={!user ? <Login /> : <Navigate replace to="/" />}
					/>
					<Route
						path="/register"
						element={!user ? <Register /> : <Navigate replace to="/" />}
					/>
					{user && (
						<>
							<Route path="/movie" element={<Home />} />
							<Route path="/series" element={<Home />} />
							<Route path="/watch" element={<Watch />} />
						</>
					)}
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
