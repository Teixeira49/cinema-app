import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function MoviesSection() {

    let [number, setNumber] = useState(1);
    let [lenPages,setPages] = useState(0)
    const [movies, setMovie] = useState([]);

    const APIKEY = "1b824ec21a9bf44b056a421c462ed47d"
    const UrlKey = "https://api.themoviedb.org/3/discover/movie?api_key="

    let PageCode = "&page="

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
      
        useState(()=> {
          importMovie();
        }, [number]);

    //  useEffect(()=>{
//    console.log("Incrementando a " + first)
//  },[first])

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
            <button className='ButtomIteration' onClick={()=>{if(number > 1){setNumber(number - 1), importMovie()}}}> ←</button>
              <p className='IterationLetter'>Pagina {number}</p>
            <button className='ButtomIteration' onClick={()=>{if(number < lenPages){setNumber(number + 1), importMovie()}}}>→</button>
        </div>
    </div>
  )
}
