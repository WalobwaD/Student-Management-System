import { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children})=>{
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')

    useEffect(()=>{
        setEmail(localStorage.getItem('email'))
        setUserName(localStorage.getItem('name'))
        setToken(localStorage.getItem('token'))
    }, [])

    return (
        <UserContext.Provider value= {{username, email, token}}>
            {children}
        </UserContext.Provider>
    )
}