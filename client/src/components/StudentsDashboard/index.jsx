import { useContext, useEffect, useState } from "react";
import style from "./index.module.scss"
import Album from "./Students";
import { Box } from "@mui/material";
import {Link} from "react-router-dom"
import { UserContext } from "../../context/AuthenticationContext/userContext";

const StudentsList = ()=>{
    const [students, setStudents] = useState([])
    const {token} = useContext(UserContext)

    const fetchData = async ()=>{
        const response = await fetch('https://student-management-system-1rxu.onrender.com/students', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Authorization : `Bearer ${token}`
            },
        })
        const data = await response.json()
        setStudents(data)

    }
    useEffect(()=>{

        fetchData()
    }, [])
    return (

        <div className={style.container}>
            <Box
                component={Link}
                className={style.addStudent}
                to="/addStudent"
                sx = {{
                    color: 'white',
                    backgroundColor: '#7760A4',
                    width: '7rem',
                    height: '2.5rem',
                    border: 'none',
                    borderRadius: '3px',
                    transition: 'all 0.3s ease-in-out',
                    padding: '0.5rem',
                    fontSize: '0.8rem',

                    '&:hover': {
                        backgroundColor: '#7B1FA2',
                    }

                }}
            > Add Student +</Box>
            <Album students = {students}/>
        </div>
    )
}

export default StudentsList;