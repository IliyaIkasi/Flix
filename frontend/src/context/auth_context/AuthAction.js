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

// Register Start
export const RegisterStart = () => ({
	type: "REGISTER_START",
});

// Register Success
export const RegisterSuccess = (user) => ({
	type: "REGISTER_SUCCESS",
	payload: user,
});

// Register Failure
export const RegisterFailure = () => ({
	type: "REGISTER_FAILURE",
});

// Logout
export const Logout = () => ({
	type: "LOGOUT",
});
