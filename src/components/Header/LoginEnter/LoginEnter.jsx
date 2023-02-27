import React from 'react'
import Translate from '../Translate/Translate'
import SingIn from './SingIn'
import "./LoginEnter.scss"

function LoginEnter() {
    return (
        <div className='header__singIn'>
            <Translate/>
            <SingIn/>
        </div>
    )
}

export default LoginEnter
