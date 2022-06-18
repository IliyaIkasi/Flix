import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/auth_context/AuthContext";
import { MovieContextProvider } from "./context/movie_context/MovieContext";

ReactDOM.render(
	<React.StrictMode>
		<AuthContextProvider>
			<MovieContextProvider>
				<App />
			</MovieContextProvider>
		</AuthContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
