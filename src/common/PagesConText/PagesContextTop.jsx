import React from 'react'
import { Link } from 'react-router-dom'
import './PagesConText.scss'

function PagesContextTop() {
    return (
        <div className="pages__context-top">
            <div className="top__context">
                <div className="border_top"></div>
                <ul>
                    <h3>To’yxona nomi</h3>
                    <div>
                        <i class="fa-solid fa-location-dot"></i>
                        <span>Toshkent sh. Shayxontohur tumani, 23 -uy</span>
                    </div>
                </ul>
            </div>
            <div className="top-right">
                <i class="fa-solid fa-location-dot"></i>
                <Link to={"/karta"} className='link' >
                    Kartada
                </Link>
            </div>
        </div>
    )
}

export default PagesContextTop
