import { createContext, useState ,useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged,signOut, signInWithEmailAndPassword} from "firebase/auth"; 
import { app } from "../Firebase/Firebase"; 

// Create Context/
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user,loading);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
    

  };



  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
   
  };


  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };





  // Context value
  const authInfo = {
    user,
    setUser,
    createUser, 
    logout,
    signInUser,
    loading,
  };





  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log('currently logged user', currentUser);
        setUser(currentUser);
        //akbar log in korar por false hobe
        setLoading(false);
       
       
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
