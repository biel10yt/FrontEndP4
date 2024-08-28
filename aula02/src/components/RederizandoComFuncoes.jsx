import React from 'react'

const RederizandoComFuncoes = () => {
    
    function escolhaDaRenderizacao
    (oQueRederizar){
        if (oQueRederizar === "h1"){
            return <h1>Texto em h1</h1>
        } else {
           return <h2>Texto em h2</h2>
        }
    }
  
    return (
    <div>
        {escolhaDaRenderizacao("teste")}
        {escolhaDaRenderizacao("h1")}
    </div>
  )
}

export default RederizandoComFuncoes