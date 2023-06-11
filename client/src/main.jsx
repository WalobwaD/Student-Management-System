import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage'
import StudentDashBoard from './pages/StudentDashBoard'
import { UserProvider } from './context/AuthenticationContext/userContext'
import CreateStudentPage from './pages/CreateStudentPage'

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
    path: '/students\' DashBoard',
    element: <StudentDashBoard/>
  },
  {
    path: '/addStudent',
    element: <CreateStudentPage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </React.StrictMode>,
)
