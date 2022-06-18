import "./register.scss";
// import flix from "../../medias/images/flix.jpg";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const emailRef = useRef();
	const passwordRef = useRef();

	const nextForm = () => {
		setEmail(emailRef.current.value);
	};
	const submitForm = () => {
		setPassword(passwordRef.current.value);
	};

	return (
		<div className="form-container">
			<div className="top-section">
				<div className="top-wrapper">
					<Link to="/" className="flix-logo">
						<img src={"flix"} alt={"flix"} className="flix-logo" />
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
							type="email"
							required
							placeholder="Email Address"
							ref={emailRef}
						/>
						<button className="register-btn" onClick={nextForm}>
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
						<button className="register-btn" onClick={submitForm}>
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
