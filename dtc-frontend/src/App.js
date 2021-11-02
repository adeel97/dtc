import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
// import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContextProvider from "./AuthContext";

function App() {
	const theme = createTheme({
		palette: {type: "light"},
	});
	return (
		<ThemeProvider theme={theme}>
			<AuthContextProvider>
				<Router>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/register" component={Register} />
						{/* <Route exact path="/reset" component={Reset} /> */}
						<Route exact path="/dashboard" component={Dashboard} />
					</Switch>
				</Router>
			</AuthContextProvider>
		</ThemeProvider>
	);
}

export default App;
