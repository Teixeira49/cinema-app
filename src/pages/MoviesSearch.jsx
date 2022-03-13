import MoviesSection from './MoviesSection'
import React, { useEffect, useState } from 'react'

export default function MoviesSearch() {

    const [search, setSearch] = useState("");
    const history = useHistory()
    const handleSumit = (error) => {
        error.prebentDefault();
    }
    

  return (
    <div>
        <form action="">
            <input type="text" name="" id="" />
            <button type='submit'>Buscar Titulo</button>
        </form>
        <div>
            <MoviesSection />
        </div>
    </div>
  )
}
