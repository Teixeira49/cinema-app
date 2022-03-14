import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function PageOfLogin() {

const [log, setLog] = useState("Registrar:");

const [mail, setMail] = useState('')
const [pass, setPass] = useState('')

  return (
    <div className='BackGrondFormLocate'>
        <form className='BackGroundForm' action="">
            <div>
                <h1 className='BackGrondFormLocate'>{log}</h1>
            </div>
            <div className='UserPresentation'>
                <label className='SuperLetterUrser' htmlFor="Usuario:"  onChange={event => setMail(event.target.value)}>Usuario: </label>
                <input className='SuperBarUser' type="text" />
            </div>
            <div className='UserPresentation'>
                <label className='SuperLetterUrser' htmlFor="Contraseña:" onChange={event => setPass(event.target.value)}> Contraseña: </label>
                <input className='SuperBarUser' type="password" />
            </div>
            <div className='ButtomsRegist'>
                <h2 className='ButtomsRegistStyle' onClick={()=> {setLog("Iniciar sesión:")}}>Inicio de sesión</h2>
                <h2 className='ButtomsRegistStyle' onClick={()=> {setLog("Registrar:")}}>Crear Nueva sesión</h2>
            </div>
            <div className='ButtomsRegist'>
                <div onClick={()=> {if(("gmail.com" == mail) && (pass.length >= 8)){console.log("Acceso otorgado")}}}>
                    <Link to={"/home"}>
                        <button className='ButtomsRegistStyle' type='submit' >Ingresar</button>
                    </Link>
                </div>
            </div>
        </form>
    </div>
  )
}
