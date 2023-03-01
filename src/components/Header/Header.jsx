import React from 'react'
import "./Header.scss"
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/images/logo.svg';
import LoginEnter from './LoginEnter/LoginEnter'

function Header({users}) {
    return (
        <>
            <header className="site-header">
                {/* site logo */}
                {
                    users ? (
                        <Link to={"/"} className='header__logo'>
                            <img src={Logo} alt="logo" style={{width: "133px"}} />
                        </Link>
                    ) : (
                        <Link to={"/"} className='header__logo'>Real<span>Day</span></Link>
                    )
                }

                {/* navbar  */}
                <Navbar/>

                {/* translate and login */}
                <LoginEnter users={users}/>
            </header>
        </>
    )
}

export default Header
