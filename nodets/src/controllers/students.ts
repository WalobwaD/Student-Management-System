import express from "express"
import {getStudents, suspendStudent, getStudentId, updateStudentById} from "../db/students"

const getAllStudents = async (req: express.Request, res: express.Response)=>{
    try {

        const students = await getStudents()
        
        return res.status(200).json(students).end()
    } catch(error) {
        console.log(error)
        return res.sendStatus(500)
    }
}

const getOneStudent = async (req: express.Request, res: express.Response)=>{

    try{

        const { id } = req.params

        const student = await getStudentId(id)
        return res.json(student).end()
    } catch(error) {
        console.log(error)
        return res.sendStatus(500)
    }

}

const updateStudent = async (req: express.Request, res: express.Response)=>{
    try {

        //select id and values from request
        const { id } = req.params
        const values = req.body

        const updatedStudent = await updateStudentById(id, values)

        return res.json({status: 'success', updatedStudent}).end()


        
    } catch(error) {
        console.log(error)
        return res.sendStatus(500)
    }
}

const suspend = async(req: express.Request, res:express.Response)=>{
    try{

        const { id } = req.params

        const suspendedStudent = await suspendStudent(id)
        return res.json(suspendedStudent)
    } catch(error) {
        console.log(error)
        return res.sendStatus(500)
    }
}

export {
    getAllStudents,
    suspend,
    getOneStudent,
    updateStudent
}