import React from 'react'
import './PagesConText.scss'
import img from '../../Assets/images/pages/wedding/pages/image.svg'
import img1 from '../../Assets/images/pages/wedding/pages/image1.svg'
import img2 from '../../Assets/images/pages/wedding/pages/image2.svg'
import img3 from '../../Assets/images/pages/wedding/pages/image3.svg'

function PagesConTextCenter() {
    return (
        <div className='img__content'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <img src={img1} alt="" />
            </div>
            <div>
                <img src={img3} alt="" />
            </div>
            <div>
                <img src={img2} alt="" />
            </div>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <img src={img1} alt="" />
            </div>
            <div>
                <img src={img3} alt="" />
            </div>
            <div>
                <img src={img2} alt="" />
            </div>            
        </div>
    )
}

export default PagesConTextCenter
