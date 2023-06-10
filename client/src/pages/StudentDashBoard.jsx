import NavBar from "../components/NavBar";
import StudentsList from "../components/StudentsDashboard";
import { useContext } from "react";
import { UserContext } from "../context/AuthenticationContext/userContext";
const StudentDashBoard = ()=>{
    const {email} = useContext(UserContext)
    return (
        <>
            <NavBar/>
            {email ? <StudentsList/> : <h1>You are not logged in</h1> }
            
        </>


    )
}

export default StudentDashBoard;