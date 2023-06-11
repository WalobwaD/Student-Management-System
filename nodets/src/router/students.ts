import express from "express"
import { getAllStudents, suspend, getOneStudent, updateStudent  } from "../controllers/students"
import { isAuthenticated, isMonitor } from "../middlewares"
import { get } from "lodash"
export default (router: express.Router)=>{
    router.get('/students', getAllStudents)
    router.get('/students/:id', getOneStudent)
    router.patch('/students/update/:id',updateStudent)
    router.delete('/students/suspend/:id',  suspend)
}