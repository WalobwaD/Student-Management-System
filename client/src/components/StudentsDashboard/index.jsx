import { useEffect, useState } from "react";
import style from "./index.module.scss"
import Album from "./Students";
import { Box } from "@mui/material";
import {Link} from "react-router-dom"

const StudentsList = ()=>{
    const [students, setStudents] = useState([])

    const fetchData = async ()=>{
        const response = await fetch('http://localhost:8080/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            credentials: 'include',
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

                }}
            > Add Student +</Box>
            <Album students = {students}/>
        </div>
    )
}

export default StudentsList;