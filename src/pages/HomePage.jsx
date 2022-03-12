import React, { useEffect } from 'react'
import MoviesSection from './MoviesSection'


export default function homePage() {

  return (
    <div> 
      <nav className='AccessMenu'>
        <a className='LetterMenu'>Iniciar Sesión</a>
        <a className='LetterMenu'>Registrar</a>
      </nav>
        <header className='TitleBar'>
          <h1 className='TitleP'>
            Cinema Teixeira
          </h1>
        </header>
        <main>
          <MoviesSection />
        </main>
    </div>
  )
}
