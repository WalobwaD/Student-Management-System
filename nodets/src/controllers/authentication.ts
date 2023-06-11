import { getStudentByEmail, createStudent } from '../db/students'
import express, { response } from 'express'
import { random, authentication } from "../helpers"

const login = async (req: express.Request, res:express.Response)=>{
    const {email, password} = req.body
    if (!email || !password) {
        return res.sendStatus(400)
    }

    const existingStudent = await getStudentByEmail(email).select('+authentication.salt +authentication.password')

    if (!existingStudent) {
        return res.sendStatus(400)
    } 
    const existHash = authentication(existingStudent.authentication.salt, password)

    if (existingStudent.authentication.password !== existHash) {
        return res.sendStatus(403)
    }

    const salt = random()
    existingStudent.authentication.sessionToken = authentication(salt, existingStudent._id.toString())
    await existingStudent.save()

    res.cookie('sessionToken', existingStudent.authentication.sessionToken, {domain:'localhost', path: '/' })
    return res.status(200).json({status: 'success', existingStudent}).end()
}

const register = async (req: express.Request, res: express.Response)=>{
    try {
        const {name,lastName, email, password, description, level, monitor} = req.body

        if (!email || !password || !name) {
            return res.sendStatus(400)
        }
        const existingStudent = await getStudentByEmail(email)
        if (existingStudent) {
            return res.sendStatus(400)
        } 

        const salt = random()
        const student = await createStudent({
            name, 
            lastName,
            email,
            description,
            level,
            monitor,
            authentication: {
                salt,
                password: authentication(salt, password),
            }
        })

        return res.json({status: 'success', student}).end()
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}

export {
    register,
    login
}