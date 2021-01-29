import React from 'react'
import { loginUrl } from '../../utilities/spotify'
import './Login.scss'

export default function Login() {
    console.log(loginUrl)
    return (
        <div className="Login">
            <h1 className="Login__title">{'{ Musickit }'}</h1>
            <hr className="Login__line"/>
            <p className="Login__text">Para continuar, inicia sesión con tu cuenta de Spotify</p>
            <a role="button" className='Login__btn' href={ loginUrl }>Conectarse con Spotify</a>
        </div>
    )
}
