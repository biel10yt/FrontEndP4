import React from 'react'

const EstouConseeguindoAprenderReact = (props) => {

  return (
    <div>
        {props.estouConseguindo ? <h1>Estou indo bem..</h1> : <h1>Preciso estudar mais...</h1>}
    </div>
  )
}

export default EstouConseeguindoAprenderReact