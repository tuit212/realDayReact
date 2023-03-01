import React from 'react'
import './CarouselItem.scss'
import { Link } from 'react-router-dom'

function CarouselItem({title , text , btn , link}) {
    return (
        <div class="carousel-caption carousel_item">
            <h3> {title} </h3>
            <p> {text} </p>
            <Link to={link} className='carousel-btn' > {btn} </Link>
        </div>
    )
}

export default CarouselItem
