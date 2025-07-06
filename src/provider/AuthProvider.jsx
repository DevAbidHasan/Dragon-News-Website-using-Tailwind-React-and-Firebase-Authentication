import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const AuthContext=createContext();
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    console.log(user);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut=()=>{
        signOut(auth);
    }

    const login=(email, password)=>{
        signInWithEmailAndPassword(auth, email,password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const authData={
        user,
        setUser,
        createUser,
        logOut,
        login
    }
    return (
            <AuthContext value={authData}>
                {children}
            </AuthContext>
    );
};

export default AuthProvider;