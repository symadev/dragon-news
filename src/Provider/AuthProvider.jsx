import { createContext, useState ,useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged,signOut, signInWithEmailAndPassword} from "firebase/auth"; 
import { app } from "../Firebase/Firebase"; 

// Create Context/
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };



  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


  const logout = () => {
    return signOut(auth);
  };





  // Context value
  const authInfo = {
    user,
    setUser,
    createUser, 
    logout,
    signInUser,
  };





  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log('currently logged user', currentUser);
        setUser(currentUser);
       
       
    });

    return () => unsubscribe(); // Cleanup function to prevent memory leaks
}, []);


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
