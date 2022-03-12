import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function MoviesSection() {

    const [movies, setMovie] = useState([]);

    const APIKEY = "1b824ec21a9bf44b056a421c462ed47d"
    const UrlKey = "https://api.themoviedb.org/3/discover/movie?api_key="
  
    const importMovie = () => {
      
    axios.get(UrlKey + APIKEY)
      .then((response) => {
        console.log("Accedido");
        console.log({response});
        setMovie(response.data.results);
      })
      .catch(e => {
        console.log(e);
      });
    };
  
    useEffect(()=> {
      importMovie();
    }, []);

  return (
    <div>
        <header className='MoviesGeneral'>
            ¿Que pelicula desea consultar hoy?:
        </header>
        <ul>
            {movies.map(movie => (
                <li key={movie.id}><div>{"Titulo: "}{movie.title}</div><div>{"Idioma Original: "}{movie.original_language}</div></li>
            ))}
        </ul>
    </div>
  )
}
