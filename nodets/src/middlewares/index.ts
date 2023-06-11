import express from "express"
import { getStudentBySessionToken, getStudentId } from "../db/students"
import {get, merge} from "lodash"


const isMonitor = async(req:express.Request, res: express.Response ,next: express.NextFunction)=>{

    try {
        const checkMonitor = get(req, 'identity.monitor') as boolean
        if (checkMonitor){
            next()
        } else {
            return res.sendStatus(403)
        }
    } catch(error) {
        console.log(error)
        return res.sendStatus(500)
    }
}


const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction)=> {
    try {

        const sessionToken = req.cookies['sessionToken']
        if (!sessionToken) {
            return res.sendStatus(400)
        }

        const existingStudent = await getStudentBySessionToken(sessionToken)
        if (!existingStudent) {
            return res.sendStatus(400)
        }

        merge(req, {identity: existingStudent})

        return next()
    } catch(error) {
        console.log(error)
        return res.sendStatus(400)
    }
} 

export {
    isAuthenticated,
    isMonitor
}