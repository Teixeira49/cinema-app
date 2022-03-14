import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import NavegationBar from './NavegationBar';
import ChargingPage from './ChargingPage';

export default function MovieDetails(){

    // Logica de extraccion:

    const {movieId} = useParams();
    console.log(movieId)

    const [movies, setMovie] = useState(null);

    const UrlKeyA = "https://api.themoviedb.org/3/movie/"
    const UrlKeyB = "?api_key="
    const APIKEY = "1b824ec21a9bf44b056a421c462ed47d"

    useEffect(() => {
        axios.get(UrlKeyA + movieId + UrlKeyB + APIKEY)
        .then((response) => {
            console.log("Accedido correctamente a la pelicula:");
            setMovie(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }, [movieId]);

    // Si no carga la pelicula:

    if(!movies){
        return <div>
            <ChargingPage />
        </div>
    }

    // Variables rellables:

    const poster = "https://image.tmdb.org/t/p/w500" + movies.poster_path;
    const title = "Pelicula: " + movies.title;
    let adultos = "";
    let website = "";
    let websiteUrl = "";
    let presupuesto = "";
    let recaudacion = "";
    let sipnosis = movies.overview;

    // Reemplazos puntuales de data para hacerlo mas entendible el muestreo en la ficha de detalles:

    if(movies.adults){
        adultos = "Solo para mayores de +18"
    }else{
        adultos = "Para todo publico"
    }

    if(movies.homepage != ""){
        website = movies.homepage
        websiteUrl = movies.homepage
    }else{
        website = "No posee sitio web oficial"
        websiteUrl = ""
    }

    if((movies.budget) <= 0){
        presupuesto = "Desconocido."
    }else{
        presupuesto = "$ "+ movies.budget + " USD"
    }

    if((movies.revenue) <= 0){
        if((movies.status != "Released")) {
            recaudacion = "Aun no empezada."
        }else{
            recaudacion = "Desconocido."
        }
    }else{
        recaudacion = "$ "+ movies.revenue + " USD"
    }

    // La sipnosis la arroja con la primera ltra en minuscula, correccion:

    sipnosis = sipnosis.charAt(0).toUpperCase() + sipnosis.slice(1) // Colocar la primera letra de la descripcion en mayuscula

    // Muestra de la ficha:

    return <div>
        <NavegationBar />
                <header className='MoviesGeneral'>
                    <h3 className='DetailsTitle'><strong>{title}</strong></h3>
                </header>
                <div className='FrameDetails'>
                    <div>
                        <img className="MovieImageDetails" src={poster} alt="" />
                    </div>
                    <div className='LetterDetails'>
                        <p><strong>Nombre:</strong> {movies.title + "."}</p>
                        <p><strong>Clasificacion de funcion:</strong> {adultos + "."}</p>
                        <p><strong>Duración:</strong> {movies.runtime + " minutos."}</p>
                        <p><strong>Generos:</strong> {movies.genres.map(genre => " " + genre.name) + "."}</p>
                        <p><strong>Fecha de lanzamiento:</strong> {movies.release_date}</p>
                        <p><strong>Idioma Original:</strong> {movies.original_language}</p>
                        <p><strong>Idiomas disponibles:</strong> {movies.spoken_languages.map(genre => " " + genre.iso_639_1) + "."}</p>
                        <p><strong>Estado:</strong> {movies.status}</p>
                        <p><strong>Presupuesto:</strong> {presupuesto}</p>
                        <p><strong>Recaudacion:</strong> {recaudacion}</p>    
                        <p><strong>Compañias productoras:</strong> {movies.production_companies.map(genre => " " + genre.name) + "."}</p>
                        <p><strong>Popularidad:</strong> {movies.popularity}</p>
                        <p><strong>Promedio Votos:</strong> {movies.vote_average}</p>
                        <p><strong>Votos totales:</strong> {movies.vote_count}</p>
                        <p><strong>Sipnosis:</strong> {sipnosis}</p>
                        <p><strong>Sitio web Promocional:</strong> <a href={websiteUrl}>{website}</a></p>
                    </div>
                </div>

            </div>
    }

    // Se que le puse mas datos en detalles de los pedidos, pero lo quise hacer como un bonus porque sentia que podia... espero lo entiendan amigos.
