import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './scenes/main/LandingPage'
import Register from './scenes/main/Register'
import Login from './scenes/main/Login'
import AdminHome from './scenes/admin/AdminHome'
import AdminLayout from './scenes/admin/AdminLayout'
import CollectionCenter from './scenes/collection-center/CollectionCenter'
import Donor from './scenes/donor/Donor'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="home" element={<AdminHome />} />
        </Route>

        {/* donor */}
        <Route path="/donor" element={<Donor />} />
        <Route path="/collection-center" element={<CollectionCenter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App