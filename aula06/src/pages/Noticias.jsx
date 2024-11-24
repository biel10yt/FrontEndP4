import React, { useEffect, useState } from 'react'

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
            <li key={noticia.id}>
              <h2>{noticia.titulo}</h2>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Noticias