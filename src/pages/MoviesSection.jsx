import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function MoviesSection() {

    const [number, setNumber] = useState("");
    const [movies, setMovie] = useState([]);

    const APIKEY = "1b824ec21a9bf44b056a421c462ed47d"
    const UrlKey = "https://api.themoviedb.org/3/discover/movie?api_key="

    let PageCode = "&page="
    let PageNumb = 1

    const importMovie = () => {
      
        axios.get(UrlKey + APIKEY + PageCode + PageNumb)
          .then((response) => {
            console.log("Accedido correctamente a:");
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
          <Link to={"/home"}>
            <button className='ButtomIteration' onClick={event => PageNumb+1}>←</button>
          </Link>
              <p className='IterationLetter'>Pagina {PageNumb}</p>
            <button className='ButtomIteration'>→</button>
        </div>
    </div>
  )
}
