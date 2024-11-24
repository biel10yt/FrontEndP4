import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Faculdade from './pages/Faculdade'
import Dpolgpd from './pages/Dpolgpd'
import Navbar from './components/Navbar'
import VisualizaNoticia from './pages/VisualizaNoticia'
import NoticiasAxios from './pages/NoticiasAxios'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicial/>} />
        <Route path='/faculdade' element={<Faculdade/>} />
        <Route path='/dpo' element={<Dpolgpd/>} />
        <Route path='noticias' element={<NoticiasAxios/>} />
        <Route path='/visualiza-noticia/:id' element={<VisualizaNoticia/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App