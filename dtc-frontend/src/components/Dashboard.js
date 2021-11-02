/* eslint-disable no-unused-vars */
import { Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../AuthContext.js";


function Dashboard() {
	const history = useHistory();

	const {user, logout, isLoading, error} = useAuth();

	useEffect(() => {
		if (!user) history.push("/");
	}, [user, history]);

	if (!user) return null;
	
	return (
		<div>
			<Typography variant="h4">Dashboard</Typography>
			<Typography variant="h5">Welcome {user.email}</Typography>
			<Button
				variant="contained"
				color="primary"
				onClick={logout}>
                Logout
			</Button>
		</div>
	);
}

export default Dashboard;
