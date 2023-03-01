import React from 'react'
import { Link } from 'react-router-dom'
import "./LoginEnter.scss"


function SingIn({users}) {
    return (
        <div className='header__box'>
            {
                users ? (
                   <ul id='header_list'>
                        <Link className='header_register' id='name_header'>
                            <i class="fa-solid fa-user"></i>
                            Name
                        </Link>
                        <Link to={"login"} className='header__kirish'>
                             chiqish
                        </Link>
                   </ul>
                ) : (
                    <div className='header_item'>
                        <Link to={"login"} className='header__kirish'>Kirish</Link>
                        <Link to={"register"} className='header_register'>
                            <i class="fa-solid fa-user"></i> Registratsiya
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default SingIn
