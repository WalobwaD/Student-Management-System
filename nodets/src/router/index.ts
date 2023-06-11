import express from "express"
import authentication from "./authentication"
import students from "./students"

const router = express.Router()

export default (): express.Router => {
    authentication(router)
    students(router)
    return router;
}