import React from "react";


const AuthContext = React.createContext();


export const AuthProvider = ({ children }) => {


    const value = {};
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;