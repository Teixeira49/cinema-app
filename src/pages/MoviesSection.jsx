import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function MoviesSection() {

  // Variables del programa

    let [number, setNumber] = useState(1);    // Numero de pagina
    let [lenPages,setPages] = useState(0)     // Cantidad total de paginas
    const [movies, setMovie] = useState([]);  // Para las peliculas

  // Acceso a la api

    const APIKEY = "1b824ec21a9bf44b056a421c462ed47d"
    const UrlKey = "https://api.themoviedb.org/3/discover/movie?api_key="

  // Controlar la pagina de vista:

    let PageCode = "&page="

  // Funcion de extraccion y muestreo

    const importMovie = () => {
      
        axios.get(UrlKey + APIKEY + PageCode + number)
          .then((response) => {
            console.log("Accedido correctamente a:");
            console.log({response});
            setPages(response.data.total_pages);
            setMovie(response.data.results);
          })
          .catch(e => {
            console.log(e);
          });
        };
      
        useEffect(()=> {
          importMovie();
        }, [number]);

  return (
    // Esta es la vista principal de seccion
    <div>
        <header className='MoviesGeneral'>
            <h3 className='DetailsTitle'><strong>¿Que pelicula vamos a consultar hoy?</strong></h3>
        </header>
        <ul className='MovieBlocks'>
            {movies.map(movie => (
                <li className="MoviesOrderDiscover" key={movie.id}>
                    <div className='MovieTarget'>
                        <Link to={"/movie"+"/"+movie.id+"?api_key="+APIKEY}>
                            <img className="MovieImage" src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt={movie.title} /> 
                        </Link>
                        <div className='MovieMargin'>
                            <div>{"======================"}</div>
                            <div className='MovieTitleStyle'><strong>{movie.title}{":"}</strong></div>
                            <div>{"======================"}</div>
                            <div>{"Idioma Original: "}{movie.original_language}</div>
                            <div>{"Calificación: "}{movie.vote_average}</div>
                            <div>{"Votos: " }{movie.vote_count}</div>
                            <div className='PhamtonPoint'>{" ."}</div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
        <div className='IterationPage'>
            <button className='ButtomIteration' onClick={()=>{if(number > 1){setNumber(number - 1), importMovie()}}}> ←</button>
              <p className='IterationLetter'>Pagina {number}</p>
            <button className='ButtomIteration' onClick={()=>{if(number < lenPages){setNumber(number + 1), importMovie()}}}>→</button>
        </div>
    </div>
  )// El segundo div dentro del codigo esta ahi debido a que realiza una operacion logica particular
}
