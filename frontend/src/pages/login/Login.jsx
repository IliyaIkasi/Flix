import "./login.scss";
import flix from "../../medias/images/flix.jpg";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="form-container">
			<div className="top-section">
				<div className="top-wrapper">
					<img src={flix} alt={flix} className="flix-logo" />
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
					/>
					<input
						className="text-box"
						required
						type="password"
						name="password"
						id="password"
						placeholder="Password"
					/>
					<button className="login-btn" required type="submit">
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
