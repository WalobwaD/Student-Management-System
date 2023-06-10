import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/AuthenticationContext/userContext";

const StudentsList = ()=>{
    const {token} = useContext(UserContext)

    const fetchData = async ()=>{
        const response = await fetch('http://localhost:8080/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        const data = await response.json()
        console.log(data)
    }
    useEffect(()=>{

        fetchData()
    }, [])
    return (
        <div>
            <h1>Student Dashboard</h1>
        </div>
    )
}

export default StudentsList;