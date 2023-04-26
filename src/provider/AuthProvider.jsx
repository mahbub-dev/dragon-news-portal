/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import app from "../../firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user, setUser] = useState('')
    const data = {user}
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                setUser('')
            }
        });
    }, [auth])

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
