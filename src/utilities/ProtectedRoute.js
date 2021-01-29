import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {getAccessTokenFromUrl} from './spotify'

export default function ProtectedRoute({path, component}) {
    let token = localStorage.getItem('token')
    console.log({token})
    if (!token || token === 'undefined') {
        console.log('token es undefined')
        const hash = getAccessTokenFromUrl();
        console.log(hash)
        token = hash['access_token'];
        localStorage.setItem('token', token)
        window.location.hash = '';
    }

    // if (token) {
    //     window.location.hash = '';
    //     console.log(token)
    //     getUserPlaylist(token)
    //     console.log('hola')
    // }
    if (token) {
        // console.log("ACA ESTAMOS ADENTRO AHRE")
        return (
            
            <Route path={path} component={component}/> 
        )
    } else {
        console.log('estaomos entrando aca?')
        return (
        <Redirect to='/login' />
        )
    }
}
