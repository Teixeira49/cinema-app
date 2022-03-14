import React from 'react'
import NavegationBar from './NavegationBar'

// Particular vista de cuando no se encuentra una vista:

export default function PageNotFound() {
  return (
    <div>
      <NavegationBar />
        <p className='PhamtonPointA'>.</p>
        <h1 className='NotFoundDetails'>Error 404: Page not Found</h1>
        <h4 className='NotFoundDetails'>
            Don't be sad. come take a hug
        </h4>
        <p className='PhamtonPointA'>.</p>
        <h4 className='NotFoundDetails'>
            (っ◔◡◔)っ
        </h4>
        
    </div>
  )
}
