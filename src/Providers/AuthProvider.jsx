import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (userData) => {
    setUser(userData);
    setLoading(false);
  };

  const loginUser = (userData) => {
    setUser(userData);
    setLoading(false);
  };
  const authInfo = {
    user,
    loading,
    registerUser, 
    loginUser,
  };

  

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
