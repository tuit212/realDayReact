import React from 'react' 
import { NavLink } from 'react-router-dom'


function Navbar() {
    return (
        <nav className='header__nav'>
            <NavLink to={"/katalog"} className='nav-link'>
                Katalog
            </NavLink>
            <NavLink to={"/menenjer"} className='nav-link'>
                Menenjer
            </NavLink>
            <NavLink to={"/kredit"} className='nav-link'>
                Kredit
            </NavLink>
            <NavLink to={"/asal_oyi"} className='nav-link'>
                Asal oyi
            </NavLink>
            <NavLink to={"/portfolio"} className='nav-link'>
                Portfolio
            </NavLink>
            <NavLink to={"/aloqa"} className='nav-link'>
                Aloqa
            </NavLink>
        </nav>
    )
}

export default Navbar
