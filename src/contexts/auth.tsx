import React from "react";


type loginValues = {
    user?: string
    password?: string
}
interface TypeValue {
    onLogin: (arg0: loginValues) => void
}

const AuthContext = React.createContext<TypeValue>({
    onLogin: () => { }
});

export const AuthProvider = ({ children }: any) => {

    const onLogin = ({ user, password }: loginValues) => {
        console.log(user, password);
    }

    const value: TypeValue = {
        onLogin
    };


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;