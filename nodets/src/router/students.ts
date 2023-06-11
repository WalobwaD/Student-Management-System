import express from "express"
import { getAllStudents, suspend, getOneStudent, updateStudent  } from "../controllers/students"
import { isAuthenticated, isMonitor } from "../middlewares"
import { get } from "lodash"
export default (router: express.Router)=>{
    router.get('/students',isAuthenticated, getAllStudents)
    router.get('/students/:id',isAuthenticated, getOneStudent)
    router.patch('/students/update/:id', isAuthenticated, isMonitor, updateStudent)
    router.delete('/students/suspend/:id', isAuthenticated, isMonitor, suspend)
}