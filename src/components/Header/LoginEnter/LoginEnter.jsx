import React from 'react'
import Translate from '../Translate/Translate'
import SingIn from './SingIn'
import "./LoginEnter.scss"

function LoginEnter({users}) {
    return (
        <div className='header__singIn'>
            <Translate/>
            <SingIn users={users} />
        </div>
    )
}

export default LoginEnter
