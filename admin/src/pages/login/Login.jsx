import "./login.scss";
import flix from "../../medias/flix.jpg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { login } from "../../context/auth_context/AuthApiCalls";
import { AuthContext } from "../../context/auth_context/AuthContext";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { isFetching, dispatch } = useContext(AuthContext);
	const handleLogin = (e) => {
		e.preventDefault();
		login({ email, password }, dispatch);
	};

	return (
		<div className="form-container">
			<div className="top-section">
				<div className="top-wrapper">
					<Link to="/" className="flix-logo">
						<img src={flix} alt={flix} className="flix-logo" />
					</Link>
					<button className="signinBtn">Sign In</button>
				</div>
			</div>
			<div className="login-section">
				<form className="form-section" action="" method="post">
					<h1>Sign In</h1>
					<input
						className="text-box"
						required
						type="email"
						placeholder="Email Address"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						className="text-box"
						required
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						className="login-btn"
						required
						type="submit"
						onClick={handleLogin}
						disabled={isFetching}
					>
						Sign In
					</button>
					<span>
						New To Netflix?
						<b>
							<Link className="nav-link" to="/register">
								Sign Up Now
							</Link>
						</b>
					</span>
					<span>
						This page is protected by Google reCAPTCHA to ensure you're not a
						robot.
						<b>
							<Link className="nav-link" to="/register">
								Learn More.
							</Link>
						</b>
					</span>
				</form>
			</div>
		</div>
	);
};

export default Login;
