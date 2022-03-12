import { useState, useEffect} from 'react'
import logo from './logo.svg'
import './App.css'
import HomePage from './pages/HomePage'
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

const MovieDetails = () =>
  <h1> Movie: </h1>

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/movies' element={<MoviesFull />}/>
        <Route path='/movieDetails' element={<MovieDetails />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/regist' element={<Register />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </Router>
  );
}

export default App
