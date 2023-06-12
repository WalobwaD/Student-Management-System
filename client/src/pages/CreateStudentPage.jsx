//local imports
import NavBar from "../components/NavBar"
import CreateStudent from "../components/StudentsDashboard/CreateStudents"
import Footer from "../components/Footer"

//react imports
import { useContext, useEffect } from "react"
import { UserContext } from "../context/AuthenticationContext/userContext"

//router imports
import { useNavigate } from "react-router-dom"

const CreatePage = ()=>{
    const navigate = useNavigate()

    const {email} = useContext(UserContext)

    useEffect(()=>{
        if(!email){
            navigate("/login")
        }
    }, [])
    return (
        <>
            <NavBar/>
            <CreateStudent/>
            <Footer/>
        </>
    )
}

export default CreatePage