import { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children})=>{
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    const [isMonitor, setIsMonitor] = useState()

    useEffect(()=>{
        setEmail(localStorage.getItem('email'))
        setUserName(localStorage.getItem('name'))
        setToken(localStorage.getItem('token'))
        setIsMonitor(localStorage.getItem('isMonitor'))
    }, [])

    return (
        <UserContext.Provider value= {{username, email, token, isMonitor}}>
            {children}
        </UserContext.Provider>
    )
}