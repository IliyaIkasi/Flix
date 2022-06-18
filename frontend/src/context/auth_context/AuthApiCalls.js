import axios from "axios";
import {
	LoginFailure,
	LoginStart,
	LoginSuccess,
	RegisterFailure,
	RegisterStart,
	RegisterSuccess,
	Logout,
} from "./AuthAction";

export const login = async (user, dispatch) => {
	dispatch(LoginStart());
	try {
		const res = await axios.post("http://localhost:4000/flix/auth/login", user);
		dispatch(LoginSuccess(res.data));
	} catch (error) {
		dispatch(LoginFailure());
		console.log(error);
	}
};

export const register = async (user, dispatch) => {
	dispatch(RegisterStart());
	try {
		const res = await axios.post(
			"http://localhost:4000/flix/auth/register",
			user
		);
		dispatch(RegisterSuccess(res.data));
	} catch (error) {
		dispatch(RegisterFailure());
	}
};

export const logout = async (dispatch) => {
	localStorage.removeItem("user");
	dispatch(Logout());
};
