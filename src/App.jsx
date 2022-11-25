import { useState } from 'react'
import { Home } from './pages/Home'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'


function App() {
  const API_KEY = '30e931931f92cfbd864962a9432bbb08'
  const BASE_URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
        </Routes>
      </HashRouter>
    </>

  )
}

export default App
