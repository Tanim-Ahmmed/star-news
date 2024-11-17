import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user)

    const createNewUser = (email, pass) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,pass)
    }


    const userLogin =(email,pass) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const logOut = () => {  
        setLoading(true);
        return signOut((auth));
    };


    const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser, updatedData);
    }


    const authInfo = {
        user,
        loading,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        updateUserProfile,
        
    }

    
    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        }) 
        return () =>{
            unsubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;