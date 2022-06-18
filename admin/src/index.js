import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/auth_context/AuthContext";
import { MovieContextProvider } from "./context/movie_context/MovieContext";
import { UserContextProvider } from "./context/user_context/UserContext";

ReactDOM.render(
	<React.StrictMode>
		<AuthContextProvider>
			<MovieContextProvider>
				<UserContextProvider>
					<App />
				</UserContextProvider>
			</MovieContextProvider>
		</AuthContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
