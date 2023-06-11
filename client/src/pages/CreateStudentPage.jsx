import NavBar from "../components/NavBar"
import CreateStudent from "../components/StudentsDashboard/CreateStudents"
import { useContext } from "react"
import { UserContext } from "../context/AuthenticationContext/userContext"
const CreatePage = ()=>{
    const {email} = useContext(UserContext)
    return (
        <>
            <NavBar/>
            {email? <CreateStudent/> : <h1>you are not logged in</h1>}
        </>
    )
}

export default CreatePage