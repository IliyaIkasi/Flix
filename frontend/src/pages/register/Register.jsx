import "./register.scss";
import flix from "../../medias/images/flix.jpg";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../context/auth_context/AuthApiCalls";
import { AuthContext } from "../../context/auth_context/AuthContext";

const Register = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { isFetching, dispatch } = useContext(AuthContext);

	const usernameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();

	const nextForm = (e) => {
		e.preventDefault();
		setUsername(usernameRef.current.value);
		setEmail(emailRef.current.value);
	};
	const submitForm = (e) => {
		e.preventDefault();
		setPassword(passwordRef.current.value);
		register({ username, email, password }, dispatch);
	};

	return (
		<div className="form-container">
			<div className="top-section">
				<div className="top-wrapper">
					<Link to="/" className="flix-logo">
						<img src={flix} alt={flix} className="flix-logo" />
					</Link>
					<button className="signinBtn">Sign Up</button>
				</div>
			</div>
			<div className="register-section">
				<h1>Unlimited movie, TV shows, and more</h1>
				<h2>Watch anywhere. Cancel anytime.</h2>
				<p>
					Ready to watch? Enter your email to create or restart your membership.
				</p>
				{!email ? (
					<div className="form-section">
						<input
							className="text-box"
							type="text"
							required
							placeholder="Username"
							ref={usernameRef}
						/>
						<input
							className="text-box"
							type="email"
							required
							placeholder="Email Address"
							ref={emailRef}
						/>
						<button
							className="register-btn"
							onClick={nextForm}
							disabled={isFetching}
						>
							Get Started
						</button>
					</div>
				) : (
					<form action="" className="form-section">
						<input
							className="text-box"
							type="password"
							required
							placeholder="Password"
							ref={passwordRef}
						/>
						<button
							className="register-btn"
							onClick={submitForm}
							disabled={isFetching}
						>
							Start
						</button>
					</form>
				)}
				<p className="link">
					Already have an account?{" "}
					<b>
						<Link className="nav-link" to="/login">
							Sign In
						</Link>
					</b>
				</p>
			</div>
		</div>
	);
};

export default Register;
