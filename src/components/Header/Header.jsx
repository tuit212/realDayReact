import React from 'react'
import "./Header.scss"
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import LoginEnter from './LoginEnter/LoginEnter'

function Header() {
    return (
        <>
            <header className="site-header">
                {/* site logo */}
                <Link to={"/"} className='header__logo'>Real<span>Day</span></Link>

                {/* navbar  */}
                <Navbar/>

                {/* translate and login */}
                <LoginEnter/>
            </header>
        </>
    )
}

export default Header
