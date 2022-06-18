import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const user = JSON.parse(localStorage.getItem("user-front"));

const INITIAL_STATE = {
	user: user ? user : null,
	isFetching: false,
	error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

	useEffect(() => {
		if (state.user) {
			localStorage.setItem("user-front", JSON.stringify(state.user));
		}
	}, [state.user]);

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				isFetching: state.isFetching,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
