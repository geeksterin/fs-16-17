import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const {
    authInstance,
    authState: { isAuthenticated }
  } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/");
  }

  const handleGoogleLogin = async () => {
    try {
      // Logic for Google login
      console.log("Google login clicked");
      const googleProvider = new GoogleAuthProvider();
      await signInWithPopup(authInstance, googleProvider);
      navigate("/");
      // TODO: show toast in case of success
    } catch (e) {
      console.log(e);
      // TODO: show toast in case of failure
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-pattern">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-50 flex items-center justify-center"
        >
          <FcGoogle className="text-2xl mr-2" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Auth;
