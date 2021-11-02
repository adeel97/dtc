/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../AuthContext.js";

import TextField from "@material-ui/core/TextField";
import {Typography, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	container: {
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(2),
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		textAlign: "center",
	},
	text: {
		color: theme.palette.primary.main
	},
	textField: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	}
}));

function Register() {
	const classes = useStyles();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const history = useHistory();

	const {register, isLoading, error} = useAuth();

	const handleRegister = () => {
		if (!email || !password) alert("Please enter email and password");
		register(email, password)
			.then(response => {
				console.log(response);
				history.push("/");
			});
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	
	return (
		<div className={classes.container}>
			<Typography variant="h4" className={classes.text}>
				Sign Up
			</Typography>
			<TextField
				label="Email Address"
				variant="outlined"
				className={classes.textField}
				value={email}
				onChange={handleEmailChange}
			/>
			<TextField
				label="Password"
				type="password"
				variant="outlined"
				className={classes.textField}
				value={password}
				onChange={handlePasswordChange}
			/>
			<Button variant="contained" color="primary" disabled={isLoading} onClick={handleRegister}>
				Register
			</Button>
			{/* <Button variant="contained" color="primary" onClick={loginWithGoogle}>
				Sign In With Google
			</Button> */}
			<Typography>
				Already have an account? <Link to="/">Login</Link> now.
			</Typography>
		</div>
	);
}

export default Register;
