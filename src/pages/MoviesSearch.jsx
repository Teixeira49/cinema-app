import MoviesSection from './MoviesSection'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function MoviesSearch() {

    //const [search, setSearch] = useState("");
    //const history = useHistory()
    //const handleSumit = (error) => {
    //    error.prebentDefault();
    //}
    
    const [movies, setMovie] = useState([]);

    const APIKEY = "1b824ec21a9bf44b056a421c462ed47d"
    const UrlKey = "https://api.themoviedb.org/3/search/movie?api_key="
    let movieSearch = ""

    const importMovie = () => {
      
        axios.get(UrlKey + APIKEY + movieSearch)
          .then((response) => {
            console.log("Accedido correctamente a la busqueda:");
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

  if(movieSearch == ""){
      return (
        <div>
            <form action="">
                <label htmlFor=""></label>
                <input type="text" name="" id="" />
                <button type='submit'>Buscar Titulo</button>
            </form>
            <div>
                <MoviesSection />
            </div>
        </div>
      )
    }else{
        return (
            <div>
                <form action="">
                    <input type="text" name="pedido" id="pedido" />
                  <Link to={pedido}>
                    <button type='submit'>Buscar Titulo</button>
                  </Link>
                        
                </form>
                <div>
                    <MoviesSection />
                </div>
            </div>
          )
    }
    }
    // &query=Jack+Reacher