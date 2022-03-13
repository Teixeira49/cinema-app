import MoviesSection from './MoviesSection'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function MoviesSearch() {

    const [title, setTitle] = useState('')

    const APIKEY = "1b824ec21a9bf44b056a421c462ed47d"

        return (
            <div>
                <form action="">
                    <input onChange={event => setTitle(event.target.value)} />
                    <Link to={title +"?api_key="+APIKEY}>
                        <button type='submit' id="pedir">Buscar Titulo</button>
                    </Link>
                </form>
                <div>
                    <MoviesSection />
                </div>
            </div>
          )
    }
    
    // &query=Jack+Reacher