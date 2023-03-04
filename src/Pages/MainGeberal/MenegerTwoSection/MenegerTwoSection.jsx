import React from 'react'
import './MenegerTwoSection.scss'
import Img1 from '../../../Assets/MenegerTwoSectionImg/MenegerTwoSection1.svg'
import Img2 from '../../../Assets/MenegerTwoSectionImg/MenegerTwoSection2.svg'
import Img3 from '../../../Assets/MenegerTwoSectionImg/MenegerTwoSection3.svg'
import Img4 from '../../../Assets/MenegerTwoSectionImg/MenegerTwoSection4.svg'
import Img5 from '../../../Assets/MenegerTwoSectionImg/listr.svg'
function MenegerTwoSection() {
  return (
    <div className='MenegerTwoSection'>
        <div className="container">
            <div className="box">
                <div className="box__left">
                    <ul className="box__left__list">
                    <div className="box__left__list__card">
                        <div className="box__left__list__card__box">
                        <li className="box__left__item">
                            <img src={Img1} alt="" className='box__left__list__card__box__img1'/>
                        </li> 
                        </div>
                        <div className="box__left__list__card__box">
                          <li className="box__left__item">
                            <img src={Img2} alt="" className='box__left__list__card__box__img2' />
                        </li> 
                        
                         <li className="box__left__item">
                            <img src={Img3} alt="" className='box__left__list__card__box__img3' />
                        </li>
                        </div>
                       
                    </div>
                         <li className="box__left__item">
                            <img src={Img4} alt="" className='box__left__item__img4' />
                        </li>
                    </ul>
                </div>
                <div className="box__right">
                    <ul className="box__right__list1">
                        <li className="box__right__list1__item">
                            <img src={Img4} alt="" className='box__right__list1__item__img1' />
                        </li>
                        <div className="box__right__list1__item__divs">
                            <li className="box__right__list1__item">
                                 <img src={Img5} alt="" className='box__right__list1__item__img' />
                            </li>
                             <li className="box__right__list1__item">
                                <img src={Img5} alt="" className='box__right__list1__item__img' />
                            </li>
                        </div>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenegerTwoSection