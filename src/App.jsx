import { useState, useEffect} from 'react'
import logo from './logo.svg'
import './App.css'
import HomePage from './pages/HomePage'
import MovieDetails from './pages/MovieDetails'
import MoviesSearch from './pages/MoviesSearch'
import ComingSoonMovies from './pages/ComingSoonMovies'
import PageNotFound from './pages/PageNotFound'
import MovieFound from './pages/MovieFound'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios"


const Register = () =>
  <h1> Register:</h1>

const Login = () =>
  <h1> Login: </h1>

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav className='AccessMenu'>
        <strong>
          <a className='LetterMenu' href="/home">Inicio</a>
          <a className='LetterMenu' href="/moviesSearch">Buscar</a>
          <a className='LetterMenu' href="/comingSoon">Proximamente</a>
          <a className='LetterMenu' href='/login'>Iniciar Sesión</a>
          <a className='LetterMenu' href='/regist'>Registrar</a>
        </strong>
      </nav>
      <header className='TitleBar'>
        <h1 className='TitleP'>
          Cinema Teixeira
        </h1>
      </header>
      <Router>
        <Routes>
          <Route path='/home' element={<HomePage />}/>
          <Route path='/moviesSearch' element={<MoviesSearch />}/>
          <Route path="/comingSoon" element={<ComingSoonMovies />}/>
          <Route exact path='/movie/:movieId' element={<MovieDetails />}/>
          <Route exact path='/moviesSearch/:queryM' element={<MovieFound />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/regist' element={<Register />}/>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
