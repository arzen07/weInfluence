import fb from "../firebase";
import React, { useEffect, useState } from "react";

// makes value global to whole app
export const AuthContext = React.createContext();
// crreating provider which holds user auth state

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fb.auth().onAuthStateChanged(setCurrentUser);

    }, []);
    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}>
            {children}
        </AuthContext.Provider >
    );
}