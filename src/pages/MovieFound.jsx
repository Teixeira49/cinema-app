import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom"
import MoviesSearch from './MoviesSearch';

export default function MovieFound() {

    const {queryM} = useParams();
    console.log(queryM)

    let queryResult = queryM

    let PageCode = "&page="

    let [number, setNumber] = useState(1);
    let [lenPage ,setPages] = useState(0)

    let QueryData = "&query=" + queryM.replace(" ", "+");

    const [movies, setMovie] = useState(null);

    const UrlKey = "https://api.themoviedb.org/3/search/movie?api_key="
    const APIKEY = "1b824ec21a9bf44b056a421c462ed47d"

    const GetMovie = () => {
        axios.get(UrlKey + APIKEY + QueryData + PageCode + number)
        .then((response) => {
            console.log("Accedido correctamente a la pelicula:");
            setPages(response.data.total_pages);
            setMovie(response.data.results);
        })
        .catch(e => {
            console.log(e);
        });
    };

    useEffect(()=> {
        GetMovie();
    },[number])

    if(!movies){
        return <div className='MoviesGeneral'>
                    <h1 className='DetailsTitle'><strong>Cargando su sitio web...</strong></h1>
                    <p className='PhamtonPointA'>.</p>
                    <p>Por favor espere, este proceso puede tardar un poco</p>
                    <p className='PhamtonPointA'>.</p>
                    <p>Si no funciona, regrese atras y vuelva a intententarlo mas tarde, intente ademas chequear que su conexion a internet es estable para acceder al contenido</p>
                    <p className='PhamtonPointA'>.</p>
                    <p>Tranquilo usuario, toma, un abrazo:</p>
                    <p>(っ^_^)っ</p>
                </div>
    }

  return (
    <div>
        <header className='MoviesGeneral'>
            <h3 className='DetailsTitle'><strong>Resultados de la busqueda ({queryResult}, Pagina {number}):</strong></h3>
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
            <button className='ButtomIteration' onClick={()=>{if(number > 1){setNumber(number - 1), GetMovie()}}}>←</button>
            <Link to={"/moviesSearch"}>
                <button className='ButtomReturn'>Hacer otra Busqueda</button>
            </Link>
            <button className='ButtomIteration' onClick={()=>{if(number < lenPage){setNumber(number + 1), GetMovie()}}}>→</button>
        </div>

    </div>
  )
}
