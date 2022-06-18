import axios from "axios";
import {
	deleteUserFailure,
	deleteUserStart,
	deleteUserSuccess,
	getUsersFailure,
	getUsersStart,
	getUsersSuccess,
} from "./UserAction";

export const getUsers = async (dispatch) => {
	dispatch(getUsersStart());
	try {
		const res = await axios.get("http://localhost:4000/flix/users", {
			headers: {
				"flix-token": JSON.parse(localStorage.getItem("user")).token,
			},
		});
		dispatch(getUsersSuccess(res.data.allUsers));
	} catch (error) {
		dispatch(getUsersFailure());
	}
};

export const deleteUser = async (id, dispatch) => {
	dispatch(deleteUserStart());
	try {
		await axios.delete("http://localhost:4000/flix/users/" + id, {
			headers: {
				"flix-token": JSON.parse(localStorage.getItem("user")).token,
			},
		});
		dispatch(deleteUserSuccess(id));
	} catch (error) {
		dispatch(deleteUserFailure());
	}
};
