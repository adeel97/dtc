/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";
import {auth} from "./firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	GoogleAuthProvider,
	signInWithPopup
} from "firebase/auth";

const AuthContext = createContext({
	user: null,
	register: () => Promise,
	login: () => Promise,
	loginWithGoogle: () => Promise,
	logout: () => Promise,
	error: null,
	isLoading: false
});

export const useAuth = () => useContext(AuthContext);


// eslint-disable-next-line react/prop-types
export default function AuthContextProvider({children}) {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	
	function register(email, password) {
		setIsLoading(true);
		setError(null);
		return createUserWithEmailAndPassword(auth, email, password)
			.catch(error => {
				setError(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

	function login(email, password) {
		setIsLoading(true);
		setError(null);
		signInWithEmailAndPassword(auth, email, password)
			.catch(error => {
				console.log(error);
				setError(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
        
	}

	function loginWithGoogle() {
		setIsLoading(true);
		setError(null);
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.catch(error => {
				console.log(error);
				setError(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

	function logout() {
		setIsLoading(true);
		setError(null);
		return signOut(auth)
			.catch(error => {
				setError(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

	// subscribe to changes in authentication status
	useEffect(() => {
		onAuthStateChanged(auth, user => {
			setUser(user);
		});
	}, []);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			setUser(user);
		});
		return () => {
			unsubscribe();
		};
	}, []);
    
	const value = {
		user,
		register,
		login,
		loginWithGoogle,
		logout,
		error,
		isLoading
	};
	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
}