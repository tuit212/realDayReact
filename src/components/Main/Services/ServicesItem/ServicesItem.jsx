import React from 'react'
import { NavLink } from 'react-router-dom'
import './ServicesItem.scss'
 
function ServicesItem({link , desc}) {
    return (
        <NavLink to={link} className='servicesText'>
            {desc}
        </NavLink>
    )
}

export default ServicesItem
