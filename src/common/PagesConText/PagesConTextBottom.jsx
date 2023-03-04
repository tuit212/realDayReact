import React from 'react'
import './PagesConText.scss'
import people from '../../Assets/images/pages/wedding/pages/people.svg'
import salary from '../../Assets/images/pages/wedding/pages/gift2.svg'
import gift from '../../Assets/images/pages/wedding/pages/gift.svg'

function PagesConTextBottom() {
    return (
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
    )
}

export default PagesConTextBottom
