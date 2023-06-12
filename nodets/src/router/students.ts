import express from "express"
import { getAllStudents, suspend, getOneStudent, updateStudent  } from "../controllers/students"
import { isAuthenticated, isMonitor } from "../middlewares"
import { get } from "lodash"
export default (router: express.Router)=>{
    //create home route
    router.get('/', (req: express.Request, res: express.Response)=>{
        return res.status(200).json({ message: "Welcome to the Silabu's student management system api by Walobwa Dan"}).end()
    })
    router.get('/students', isAuthenticated, getAllStudents)
    router.get('/students/:id', isAuthenticated, getOneStudent)
    router.patch('/students/update/:id',isAuthenticated,updateStudent)
    router.delete('/students/suspend/:id',isAuthenticated, isMonitor,  suspend)
}


