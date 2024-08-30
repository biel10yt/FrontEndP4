import React, {useState} from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(0)

    function incrementarContador() {
        setContador(contador + 1)
    }
    function zerar() { 
      setContador(contador * 0)
    }
    

  return (
    <div>
        <h1>Contador com useState</h1>
        <button onClick={incrementarContador}>
            Incrementar contador
        </button>
        <button onClick={zerar}>Zerar</button>
        <h1>O contador está em : {contador}</h1>
    </div>
  )
}

export default HookContador