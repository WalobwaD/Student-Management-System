import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StudentsSchema = new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: false},
    email: {type: String, required: true},
    description: {type: String, required: false},
    level: {type: Number, required: false},
    monitor: {type: Boolean, required: false},
    authentication : {
        password: {type: String, required: true, select:false},
        salt : {type: String, select: false},
        sessionToken : {type: String, select: false}
    },

}
)

const StudentsModel = mongoose.model('Students', StudentsSchema)

const getStudents = ()=>{
    return StudentsModel.find()
}

const getStudentByEmail = (email:string)=>{
    return StudentsModel.findOne({ email })
}

const getStudentBySessionToken = (sessionToken:string)=>{
    return StudentsModel.findOne({ "authentication.sessionToken": sessionToken})
}

const getStudentId = (id: string)=>{
    return StudentsModel.findById(id)
}

const createStudent = (values: Record<string, any>) =>{
    return new StudentsModel(values).save()
    .then((student)=>student.toObject())
}
const suspendStudent = (id :string)=>{
    return StudentsModel.findByIdAndDelete({_id: id})
}

const updateStudentById = (id: string, values: Record<string, any>)=>{
    return StudentsModel.findByIdAndUpdate(id, values)
}

export {
    StudentsModel,
    getStudents,
    getStudentByEmail,
    getStudentBySessionToken,
    getStudentId,
    createStudent,
    suspendStudent,
    updateStudentById
}