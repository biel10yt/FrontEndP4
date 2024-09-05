import React from 'react'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>
      {
        [
          {nome: "João", email: "joao@gmail.com",
          curso: "Sistema para internet", media:7},
          {nome: "Maria", email: "Maria@gmail.com",
            curso: "Sistema para internet", media: 8},
          {nome: "Tiago", email: "Tiago@gmail.com",
          curso: "Sistema para internet", media: 5}
        ].map((aluno) => 
         <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}/>
        )
      }
    </div>
  )
}

export default App