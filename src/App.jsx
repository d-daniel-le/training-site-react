import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import TrainingDocs from './pages/TrainingDocs'
import LoginLayout from './components/LoginLayout'
import RegisterLayout from './components/RegisterLayout'

function App() {

  return (
   <Routes>
      {/* General Landing Page */}
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path='training-docs' element={<TrainingDocs />}/>

        {/* Login */}
        <Route path='login' element={<LoginLayout />}/>

        <Route path='register' element={<RegisterLayout />}/>
      </Route>
   </Routes>
  )
}

export default App
