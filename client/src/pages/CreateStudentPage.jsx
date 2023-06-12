//local imports
import NavBar from "../components/NavBar"
import CreateStudent from "../components/StudentsDashboard/CreateStudents"
import Footer from "../components/Footer"

//react imports
import { useContext } from "react"
import { UserContext } from "../context/AuthenticationContext/userContext"

//router imports
import { useNavigate } from "react-router-dom"

const CreatePage = ()=>{
    const {email} = useContext(UserContext)
    const navigate = useNavigate()
    return (
        <>
            <NavBar/>
            {email? <CreateStudent/> : navigate('/login')}
            <Footer/>
        </>
    )
}

export default CreatePage