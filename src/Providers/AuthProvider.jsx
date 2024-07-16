import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginUser = (userData) => {
    setUser(userData);
    setLoading(false);
  };

  const logoutUser = () => {
    setUser(null);
    setLoading(false);
  };

  const authInfo = {
    user,
    loading, 
    loginUser,
    logoutUser,
  };

  

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
