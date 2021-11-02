/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
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

function Reset() {
	const classes = useStyles();
	const [email, setEmail] = useState("");

	const [user, loading, error] = useAuthState(auth);
	const history = useHistory();
	useEffect(() => {
		if (loading) return;
		if (user) history.replace("/dashboard");
	}, [user, loading]);
      
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	resetPassword(email);
	// };
	return (
		<div className={classes.container}>
			{/* <Typography variant="h4" className={classes.text}>
				Login
			</Typography>
			<TextField
				label="Email Address"
				variant="outlined"
				className={classes.textField}
				value={email}
				onChange={handleEmailChange}
			/>
			<Button variant="contained" color="primary" onClick={handleSubmit}>
				Send Password Reset Email
			</Button>
		
			<Typography>
				<Link to="/reset">Forgot Password</Link>
			</Typography>
			<Typography>
                Dont have an account? <Link to="/register">Register</Link> now.
			</Typography> */}
		</div>
	);
}

export default Reset;
