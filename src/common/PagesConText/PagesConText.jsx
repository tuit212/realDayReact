import React from 'react'
import './PagesConText.scss'
import { Link } from 'react-router-dom'
import img from '../../Assets/images/pages/wedding/pages/image.svg'
import img1 from '../../Assets/images/pages/wedding/pages/image1.svg'
import img2 from '../../Assets/images/pages/wedding/pages/image2.svg'
import img3 from '../../Assets/images/pages/wedding/pages/image3.svg'
import people from '../../Assets/images/pages/wedding/pages/people.svg'
import salary from '../../Assets/images/pages/wedding/pages/gift2.svg'
import gift from '../../Assets/images/pages/wedding/pages/gift.svg'

function PagesConText() {
    return (
        <div className='pages-context'>
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
            <div className='pages__bottom'>
                <ul className='list'>
                    <li className='item'>
                        <div>
                            <img src={people} alt="" />
                        </div>
                        <div>
                            <p className='title'>500</p>
                            <span className='line'></span>
                            <p className='text'>Sig‘imi</p>
                        </div>
                    </li>
                    <li className='item'>
                        <div>
                            <img src={salary} alt="" />
                        </div>
                        <div>
                            <p className='title'>40 000-100 000 so‘m</p>
                            <span className='line'></span>
                            <p className='text'>Narxi <span>(kishi boshiga)</span> </p>
                        </div>
                    </li>
                    <li className='item'>
                        <div>
                            <img src={gift} alt="" />
                        </div>
                        <div>
                            <p className='title'>Bor</p>
                            <span className='line'></span>
                            <p className='text'>Qo‘shimcha bonus</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PagesConText
