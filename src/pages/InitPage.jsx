import React from 'react'
import PageOfLogin from './PageOfLogin'
import PageOfTitle from './PageOfTitle'

// Vista de antes de entrar a la web

export default function InitPage() {
  return (
    <div>
        <PageOfTitle />
        <PageOfLogin />
    </div>
  )
}
