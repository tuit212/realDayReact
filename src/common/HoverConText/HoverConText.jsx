import React from 'react'
import { Link } from 'react-router-dom'

function HoverConText({title , desc  , box, link}) {
    return (
        <div className='mainCardsLeftTop_context'>
            <h4>{title}</h4>
            <p>{desc}</p>
                <h2>   {box} </h2>
           
            <Link to={link} className='cardLink'>
                Ko'rish
            </Link>
        </div>
    )
}

export default HoverConText
