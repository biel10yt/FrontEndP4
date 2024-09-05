import React, {useState} from 'react'

const HookMegaSena = () => {

    const [sorteado, setSorteado] = useState()

    const [listaDeSorteados, setListaDeSorteados] = useState([])

    function sortearNumero() {
        if (listaDeSorteados.length < 6) {

            let numSorteado = Math.floor(Math.random() * 60) + 1 
            setSorteado(numSorteado) /* copia da lista dos sorteados */
            setListaDeSorteados([...listaDeSorteados, numSorteado])
        } else {
            alert("já temos os 6 números sorteados!")
        }
    }

  return (
    <div>
        <h1>Sortador da Mega em React! :)</h1>
        <button onClick={sortearNumero}>Sortear número</button>
        <h1>último número sorteado: {sorteado}</h1>
        <h1>Sortados: {listaDeSorteados.join
            (" - ")}</h1>
    </div>
  )
}

export default HookMegaSena