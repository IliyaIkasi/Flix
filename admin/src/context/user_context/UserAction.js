// User Start
export const getUsersStart = () => ({
	type: "GET_USERS_START",
});

// User Success
export const getUsersSuccess = (users) => ({
	type: "GET_USERS_SUCCESS",
	payload: users,
});

// User Failure
export const getUsersFailure = () => ({
	type: "GET_USERS_FAILURE",
});

// Delete User Start
export const deleteUserStart = () => ({
	type: "DELETE_USER_START",
});

// Delete User Success
export const deleteUserSuccess = (id) => ({
	type: "DELETE_USER_SUCCESS",
	payload: id,
});

// Delete User Failure
export const deleteUserFailure = () => ({
	type: "DELETE_USER_FAILURE",
});
