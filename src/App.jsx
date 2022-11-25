import { useState } from 'react'
import { Home } from './pages/Home'
import { BrowserRouter, HashRouter } from 'react-router-dom'


function App() {
  const API_KEY = '30e931931f92cfbd864962a9432bbb08'
  const BASE_URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`
  return (
    <>
      <HashRouter>
        <Home />
      </HashRouter>
    </>

  )
}

export default App
