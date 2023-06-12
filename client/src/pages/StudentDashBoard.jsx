import NavBar from "../components/NavBar";
import StudentsList from "../components/StudentsDashboard";

import { useContext, useEffect } from "react";
import { UserContext } from "../context/AuthenticationContext/userContext";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const StudentDashBoard = ()=>{
    const navigate = useNavigate()
    const {email} = useContext(UserContext)
    useEffect(()=>{
        if(!email){
            navigate("/login")
        }

    },[])
    return (
        <>

            <NavBar/>
            <StudentsList/>
        </>
    )

}

export default StudentDashBoard;