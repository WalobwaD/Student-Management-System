import NavBar from "../components/NavBar";
import StudentsList from "../components/StudentsDashboard";
import { useContext } from "react";
import { UserContext } from "../context/AuthenticationContext/userContext";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


const StudentDashBoard = ()=>{
    const navigate = useNavigate()
    const {email} = useContext(UserContext)
    return (
        <>
            <NavBar/>
            {email ? <StudentsList/> : navigate("/login") }
            <Footer/>
            
        </>


    )
}

export default StudentDashBoard;