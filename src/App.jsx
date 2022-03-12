import { useState, useEffect} from 'react'
import logo from './logo.svg'
import './App.css'
import HomePage from './pages/HomePage'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const PageNotFound = () => 
  <h1> Error 404: Page not Found, Don't be sad. come take a hug (っ◔◡◔)っ </h1>

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </Router>
  );
}

export default App
