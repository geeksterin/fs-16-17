import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../config/firebase";
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    loading: true,
    user: null
  });
  const [authInstance, setAuthInstance] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    setAuthInstance(auth);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthState({
          isAuthenticated: true,
          user,
          loading: false
        });
      } else {
        setAuthState({
          isAuthenticated: false,
          user: null,
          loading: false
        });
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authInstance }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
