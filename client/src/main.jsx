//react imports
import React from 'react'
import ReactDOM from 'react-dom/client'

//react-router imports
import {createBrowserRouter, RouterProvider} from "react-router-dom"

//local imports
import Home from './pages/Home.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage'
import StudentDashBoard from './pages/StudentDashBoard'
import ViewStudentPage from "./pages/ViewStudentPage"
import UpdatePage from "./pages/UpdatePage"
import CreateStudentPage from './pages/CreateStudentPage'

//context imports
import { UserProvider } from './context/AuthenticationContext/userContext'

//styles
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/register',
    element: <RegisterPage/>
  },
  {
    path: '/students',
    element: <StudentDashBoard/>
  },
  {
    path: '/addStudent',
    element: <CreateStudentPage/>
  },
  {
    path: '/viewStudent/:id',
    element: <ViewStudentPage/>
  },
  {
    path: '/updateStudent/:id',
    element: <UpdatePage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </React.StrictMode>,
)
