// Login Start
export const LoginStart = () => ({
	type: "LOGIN_START",
});

// Login Success
export const LoginSuccess = (user) => ({
	type: "LOGIN_SUCCESS",
	payload: user,
});

// Login Failure
export const LoginFailure = () => ({
	type: "LOGIN_FAILURE",
});

// Logout
export const Logout = () => ({
	type: "LOGOUT",
});
