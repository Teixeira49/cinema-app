import { useState, useEffect} from 'react'
import logo from './logo.svg'
import './App.css'
import HomePage from './pages/HomePage'
import MovieDetails from './pages/MovieDetails'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import axios from "axios"


const PageNotFound = () =>
  <h1> Error 404: Page not Found, Don't be sad. come take a hug (っ◔◡◔)っ </h1>

const Register = () =>
  <h1> Register:</h1>

const Login = () =>
  <h1> Login: </h1>

const MoviesFull = () =>
  <h1> List of movies: </h1>

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav className='AccessMenu'>
        <strong>
          <a className='LetterMenu' href="/">Inicio</a>
          <a className='LetterMenu' href="/movies">Buscar</a>
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
          <Route path='/' element={<HomePage />}/>
          <Route path='/moviesSearch' element={<MoviesFull />}/>
          <Route exact path='/movie/:movieId' element={<MovieDetails />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/regist' element={<Register />}/>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
