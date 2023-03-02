import React from 'react'
import { Link } from 'react-router-dom'

function HoverConText({title , desc  , link}) {
    return (
        <div className='mainCardsLeftTop_context'>
            <h4>{title}</h4>
            <p>{desc}</p>
            <Link to={link} className='cardLink'>
                Ko'rish
            </Link>
        </div>
    )
}

export default HoverConText
