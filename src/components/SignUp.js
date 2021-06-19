import React, { useState } from "react";
import { Signup } from "../actions/authActions";
import { connect } from "react-redux";
import propTypes from "prop-types";

const SignUp = ({ Signup }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	const handleSubmit = () => {
		Signup(email, password, username);
	};

	return (
		<div
			className='container pt-3 d-flex align-items-center justify-content-center w-100'
			style={{ maxWidth: "400px" }}
		>
			<div>
				<div className='display-1'> Bingy </div>
				<div class='mb-3 row'>
					<label for='staticEmail' class='col-sm-2 col-form-label p-1'>
						Username
					</label>
					<div class='col-sm-10 p-1'>
						<input
							type='text'
							class='form-control'
							id='staticEmail'
							onChange={(e) => {
								setUsername(e.target.value);
							}}
						/>
					</div>
				</div>
				<div class='mb-3 row'>
					<label for='staticEmail' class='col-sm-2 col-form-label p-1'>
						Email
					</label>
					<div class='col-sm-10 p-1'>
						<input
							type='text'
							class='form-control'
							id='staticEmail'
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>
				</div>
				<div class='mb-3 row'>
					<label for='inputPassword' class='col-sm-2 col-form-label p-1'>
						Password
					</label>
					<div class='col-sm-10'>
						<input
							type='password'
							class='form-control'
							id='inputPassword'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</div>
				<div class='col-auto'>
					<button
						type='submit'
						class='btn btn-primary mb-3'
						onClick={handleSubmit}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	Signup: (email, password, username) => Signup(email, password, username),
};

Signup.propTypes = {
	Signup: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignUp);
