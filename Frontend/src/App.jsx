import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import AdminSignup from './pages/AdminSignup'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Book from './pages/Book'

const App = () => {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <Routes>
        <Route path='/' element={<UserLogin/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/adminlogin' element={<AdminLogin/>} />
        <Route path='/adminsignup' element={<AdminSignup/>} />
        <Route path='/usersignup' element={<UserSignup/>} />
        <Route path="/book/:id" element={<Book/>} />
      </Routes>
    </div>
  )
}

export default App
