import express from "express";
import http from "http"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

import router from "./router";

const app = express();

const allowedOrigins = ['http://localhost:5173', 'https://student-management-system-xi.vercel.app']

app.use(cors({
    origin:allowedOrigins,
    credentials: true,

}))
app.use(compression());
app.use(cookieParser())
app.use(bodyParser.json());

const server = http.createServer(app)

server.listen(8080, ()=>{
    console.log("Server running on http://localhost:8080/")
})

const mongoURL = 'mongodb+srv://walobwadan:upL3aFMAA57c3UTo@cluster0.nk8b58z.mongodb.net/?retryWrites=true&w=majority'//TODO: Add mongo url
mongoose.Promise = global.Promise;
mongoose.connect(mongoURL)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use('/',router())

//mongodb+srv://walobwadan:upL3aFMAA57c3UTo@cluster0.nk8b58z.mongodb.net/?retryWrites=true&w=majority