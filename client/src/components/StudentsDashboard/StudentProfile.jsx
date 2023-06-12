import {Link, useLocation, useNavigate} from "react-router-dom"

const StudentProfile = ()=>{
    const student = useLocation().state
    const navigate = useNavigate()
    console.log(student)
    return (
        <div>
            <button onClick= {(e)=>navigate(-1)}>Back</button>
            <h2>Viewed Page</h2>
            <h2>{student.name}</h2>
            <h3>{student.lastName}</h3>
        </div>
    )
}

export default StudentProfile