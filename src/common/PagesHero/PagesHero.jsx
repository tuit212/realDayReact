import React from 'react'
import { Link } from 'react-router-dom'
import './PagesHero.scss'

function PagesHero({title , desc , link , text}) {
    return (
        <div className="container carsHero">
            <div className="carsHero__context">
                <div>
                    <Link to={"/"} className='link'>
                        Bosh sahifa
                    </Link>
                    <span>-</span> 
                    <Link to={link} className='link'>
                        {text}
                    </Link>
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default PagesHero
