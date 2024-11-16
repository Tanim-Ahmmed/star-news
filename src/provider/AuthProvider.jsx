import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    console.log(user)

    const createNewUser = (email, pass) =>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }


    const userLogin =(email,pass) =>{
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const logOut = () => {  
        return signOut((auth));
    };


    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
    }

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
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