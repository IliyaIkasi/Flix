import axios from "axios";
import { LoginFailure, LoginStart, LoginSuccess, Logout } from "./AuthAction";

export const login = async (user, dispatch) => {
	dispatch(LoginStart());
	try {
		const res = await axios.post("http://localhost:4000/flix/auth/login", user);
		dispatch(LoginSuccess(res.data));
	} catch (error) {
		dispatch(LoginFailure());
	}
};
export const logout = async (dispatch) => {
	localStorage.removeItem("user");
	dispatch(Logout());
};
