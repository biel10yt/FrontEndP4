import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const url = "http://localhost:3000/noticias"

const Noticias = () => {

    const [noticias, setNoticias] = useState([])

  useEffect(() => {
      async function fetchData() {
        const res = await fetch(url)
        const data = await res.json()
        setNoticias(data)
      }
      fetchData()
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

export default Noticias