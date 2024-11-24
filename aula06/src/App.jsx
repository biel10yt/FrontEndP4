import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Faculdade from './pages/Faculdade'
import Dpolgpd from './pages/Dpolgpd'
import Noticias from './pages/Noticias'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicial/>}/>
        <Route path='/faculdade' element={<Faculdade/>}/>
        <Route path='/dpo' element={<Dpolgpd/>}/>
        <Route path='noticias' element={<Noticias/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App