import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const url = "http://localhost:3000/noticias"


const NoticiasAxios = () => {

    const [noticias, setNoticias] = useState([])

    useEffect(( ) => {
        const buscarNoticias = () => {
            axios.get(url)
            .then(response => {
                setNoticias(response.data)
            })
            .catch(erro =>{
                console.error("Ocorreu um erro", error)
            })
        }
        buscarNoticias()
    }, [])  

    return (
        <div>
          <h1>Noticias</h1>
          <ul>
            {
              noticias.map((noticia) => (
                <li Key={noticia.id}>
                  <h2><Link to={`/visualiza-noticia/${noticia.id}`}>{noticia.titulo}</Link></h2>
                </li>
              ))
            }
          </ul>
        </div>
      )
}

export default NoticiasAxios