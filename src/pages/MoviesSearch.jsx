import MoviesSection from './MoviesSection'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import NavegationBar from './NavegationBar'

export default function MoviesSearch() {

    // Variables de busqueda:

    const [title, setTitle] = useState('')

    // Token de la api:

    const APIKEY = "1b824ec21a9bf44b056a421c462ed47d"

    // Logica de la barra de busqueda:

        return (
            <div>
                 <NavegationBar />
                <form className='BackGrondFormLocate' action="">
                    <label className='SuperLetterUrser' htmlFor="">Buscar una pelicula: </label>
                    <input className='SuperBarUser' onChange={event => setTitle(event.target.value)} />
                    <Link to={title +"?api_key="+APIKEY}>
                        <button className='ButtomSearch' type='submit' id="pedir">🔎</button>
                    </Link>
                </form>
                <div>
                    <MoviesSection />
                </div>
            </div>
          )
    }
    
    // El usa lo que pase por el input para crear una nueva ruta personalizada en la cual se entregaran los datos a consultarr a la api