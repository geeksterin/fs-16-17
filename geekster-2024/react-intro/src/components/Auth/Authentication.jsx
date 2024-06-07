import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import app from "../../config/firebase";
import { useEffect, useState } from "react";

const Authentication = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const authInstance = getAuth(app);
    setAuth(authInstance);
  }, []);

  const getLoggedInUser = () => {
    console.log(auth.currentUser);
  };

  const loginWithGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, googleProvider);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const loginWithFB = async () => {
    try {
      const fbProvider = new FacebookAuthProvider();
      const response = await signInWithPopup(auth, fbProvider);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const signOutFromGoogle = async () => {
    try {
      const response = await signOut(auth);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button
        className="border-2 border-purple-500 p-2 rounded-xl hover:bg-purple-50"
        onClick={loginWithGoogle}
      >
        Login with Google
      </button>
      <button
        className="border-2 border-purple-500 p-2 rounded-xl hover:bg-purple-50"
        onClick={signOutFromGoogle}
      >
        Signout from Google
      </button>
      <button
        className="border-2 border-purple-500 p-2 rounded-xl hover:bg-purple-50"
        onClick={getLoggedInUser}
      >
        Log user data
      </button>
    </div>
  );
};

export default Authentication;
