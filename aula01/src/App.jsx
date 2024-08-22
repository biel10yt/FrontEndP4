import React from 'react'
import Adicao from './componets/adicao'
import Subtrair from './componets/Subtrair'
import Multiplicar from './componets/Multiplicar'
import Dividir from './componets/Dividir'
import PrecisoEstudar from './componets/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Adicao num1={2} num2={2}/>
      <Subtrair num1={2} num2={2}/>
      <Multiplicar num1={2} num2={2}/>
      <Dividir num1={2} num2={2}/>
      <PrecisoEstudar tecnologia={"React"}/>
    </div>
  )
}

export default App