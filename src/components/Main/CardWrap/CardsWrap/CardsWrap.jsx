import React from 'react'
import { NavLink } from 'react-router-dom'
import './CardsWrap.scss'


function CardsWrap({link , icons , desc}) {
    return (
        <NavLink to={link} className='cardsWrap' >
            {icons}
            <p>{desc}</p>
        </NavLink>
    )
}

export default CardsWrap
