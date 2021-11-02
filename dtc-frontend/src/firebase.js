import {initializeApp} from "firebase/app";
import {
	getAuth,
	// createUserWithEmailAndPassword,
	// GoogleAuthProvider,
	// signInWithPopup,
	// signInWithEmailAndPassword,
	// sendPasswordResetEmail,
} from "firebase/auth";
// import {getFirestore, collection, addDoc, where, query} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA3OqHfhhKyfkwx9VoGdAOWmiYYzocRQHE",
	authDomain: "dtc-backend.firebaseapp.com",
	projectId: "dtc-backend",
	storageBucket: "dtc-backend.appspot.com",
	messagingSenderId: "722589942091",
	appId: "1:722589942091:web:86148dcae9d44b28c9e8ce",
	measurementId: "G-Y6G3LY7ZHM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export const db = getFirestore(app);

// // authentication functions
// const googleProvider = new GoogleAuthProvider(app);

// export const loginWithGoogle = async () => {
// 	try {
// 		const res = await signInWithPopup(auth, googleProvider);
// 		const user = res.user;
// 		const q = await query(db, "users", where("uid", "==", user.uid));
//     // db
// 		// 	.collection("users")
// 		// 	.where("uid", "==", user.uid)
// 		// 	.get();
// 		if (q.docs.length === 0) {
// 			await addDoc(collection(db, "users"), {
// 				uid: user.uid,
// 				name: user.displayName,
// 				authProvider: "google",
// 				email: user.email,
// 			});
// 		}
// 	} catch (err) {
// 		console.error(err);
// 		alert(err.message);
// 	}
// };

// export const login = async (email, password) => {
// 	try {
// 		await signInWithEmailAndPassword(auth, email, password);
// 	} catch (err) {
// 		console.error(err);
// 		alert(err.message);
// 	}
// };

// export const register = async (name, email, password) => {
// 	try {
// 		const res = await createUserWithEmailAndPassword(auth, email, password);
// 		const user = res.user;
// 		await db.collection("users").add({
// 			uid: user.uid,
// 			name,
// 			authProvider: "local",
// 			email,
// 		});
// 	} catch (err) {
// 		console.error(err);
// 		alert(err.message);
// 	}
// };

// export const resetPassword = async (email) => {
// 	try {
// 		await sendPasswordResetEmail(auth, email);
// 		alert("Password reset link sent!");
// 	} catch (err) {
// 		console.error(err);
// 		alert(err.message);
// 	}
// };

// export const logout = () => {
// 	auth.signOut(auth);
// };
