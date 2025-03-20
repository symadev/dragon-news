import { createContext, useState } from "react";

// Create Context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Syma Sultana",
    email: "symasultna02@gmail.com",
  });

  // Context value
  const authInfo = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
