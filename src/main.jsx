import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'
import App from './App.jsx'

import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<Movie/>}/>
        <Route path='Search' element={<Search/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
