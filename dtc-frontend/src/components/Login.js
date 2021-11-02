/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import {Typography, Button} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core/styles";
import { useAuth } from "../AuthContext";

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
	},
	button: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	alert: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	}
}));

function Login() {
	const classes = useStyles();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const history = useHistory();

	const {login, loginWithGoogle, user, isLoading, error} = useAuth();

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	const handleLogin = () => {
		if (!email || !password) alert("Please enter email and password");
		login(email, password);
	};

	const handleLoginWithGoogle = () => {
		loginWithGoogle(email, password);
	};

	useEffect(() => {
		if (user) history.push("/dashboard");
	}, [user, history]);

	return (
		<div className={classes.container}>
			<Typography variant="h4" className={classes.text}>
				Login
			</Typography>
			{error && <Alert severity="error" className={classes.alert}>{error.message}</Alert>}
			<TextField
				label="Email Address"
				variant="outlined"
				required
				className={classes.textField}
				value={email}
				onChange={handleEmailChange}
			/>
			<TextField
				label="Password"
				type="password"
				variant="outlined"
				required
				className={classes.textField}
				value={password}
				onChange={handlePasswordChange}
			/>
			<Button variant="contained" color="primary" className={classes.button} disabled={isLoading} onClick={handleLogin}>
				Login
			</Button>
			<Button variant="contained" color="primary" className={classes.button} onClick={handleLoginWithGoogle}>
				Login with Google
			</Button>
			{/* <Typography>
				<Link to="/reset">Forgot Password</Link>
			</Typography> */}
			<Typography>
				Dont have an account? <Link to="/register">Register</Link> now.
			</Typography>
		</div>
	);
}

export default Login;
