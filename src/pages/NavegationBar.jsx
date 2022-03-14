import React from 'react'

// NavBar de la aplicacion con sus 4 opciones:

export default function NavegationBar() {
  return (
    <div>
        <nav className='AccessMenu'>
            <strong>
              <a className='LetterMenu' href="/home">Inicio</a>
              <a className='LetterMenu' href="/moviesSearch">Buscar</a>
              <a className='LetterMenu' href="/comingSoon">Proximamente</a>
              <a className='LetterMenu' href="/">Salir</a>
            </strong>
      </nav>
    </div>
  )
}
