import React, { useEffect } from 'react'
import MoviesSection from './MoviesSection'
import NavegationBar from './NavegationBar'

export default function homePage() {

  // Muestra de la seccion principal:
  
  return (
    <div> 
      <NavegationBar />
        <main>
          <MoviesSection />
        </main>
    </div>
  )
}
