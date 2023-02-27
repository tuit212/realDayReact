import React from 'react'
import "./Carousel.scss"
// import Img from '../../../Assets/images/main/caruosel/img.png'
// import Img1 from '../../../Assets/images/main/caruosel/img1.png'
// import Img2 from '../../../Assets/images/main/caruosel/img2.png'

function Carousel() {
    const leftOnclick = () => {
        console.log("left");

    }

    const rightOnclick = () => {
        console.log("left");
    }

    return (
        <div className='container' id='carousel'>
            <ul className="carousel__list" style={{transform:'translateX(0)'}}>
                <li className='carousel__item' id='item'>
                slaom
                </li>
                <li className='carousel__item' id='item1'>
                    sloam
                </li>
                <li className='carousel__item' id='item2'>
                    noef
                </li>
                <div className="carousel__pos">
                    <button className='left' id='left' onClick={leftOnclick}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className='left' id='right' onClick={rightOnclick}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </ul>
        </div>
    )
}

export default Carousel
