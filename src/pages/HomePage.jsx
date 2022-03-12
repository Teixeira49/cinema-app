import React from 'react'
import MoviesSection from './MoviesSection'

export default function homePage() {
  return (
    <div> 
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
