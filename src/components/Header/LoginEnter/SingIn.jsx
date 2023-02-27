import React from 'react'
import { Link } from 'react-router-dom'
import "./LoginEnter.scss"


function SingIn() {
    return (
        <div className='header__box'>
            <Link to={"/kirish"} className='header__kirish'>Kirish</Link>
            <Link to={"/registratsiya"} className='header_register'>
                <i class="fa-solid fa-user"></i> Registratsiya
            </Link>
        </div>
    )
}

export default SingIn
