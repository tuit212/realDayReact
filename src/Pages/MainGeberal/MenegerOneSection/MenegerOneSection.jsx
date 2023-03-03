import React from 'react'
import './MenegerOneSection.scss'
import Img1 from '../../../Assets/MenegerImg/menegercaruse1.svg'
import Img2 from '../../../Assets/MenegerImg/menegercaruse2.svg'
import Img3 from '../../../Assets/MenegerImg/menegercaruse3.svg'
import {Link} from 'react-router-dom'
function MenegerOneSection() {
  return (
    <div className='MenegerOneSection'>
            <div className="container">
                <div className="Card">
                    <h3 className='Card__title1' >Menejerdan foydalaning</h3>
                    <h3 className='Card__title2'>To’y xizmatlari uchun Wedding menejer</h3>
                    <ul className="Card__list1">
                        <li className="Card__item">
                            <h4 className="Card__item__title">
                                01 To’y xizmatlari
                            </h4>
                            <p className="Card__item__text">
                                Biz bilan birga bo’ling va to’yingizni yaxshi
                                o’tkazing
                            </p>
                        </li>
                        <li className="Card__item">
                            <h4 className="Card__item__title">
                                02 Yubiley
                            </h4>
                            <p className="Card__item__text">
                                 Biz bilan birga bo’ling va to’yingizni
                                yaxshi o’tkazing
                            </p>
                        </li>
                        <li className="Card__item">
                            <h4 className="Card__item__title">
                                03 Tug’ilgan kun
                            </h4>
                            <p className="Card__item__text">
                                Ko’tarinki ruxdagi tug’ilgan kun
                                bayrmalarini esda qolarli kunga 
                                aylantiring.
                            </p>
                        </li>
                        <li className="Card__item">
                            <h4 className="Card__item__title">
                                04 Bayramlar
                            </h4>
                            <p className="Card__item__text">
                                Ochilish marosimlar va tantanali 
                                bayramlar tartibli o’tkazish
                            </p>
                        </li>
                    </ul>
                    
                    {/* Carusell  start*/}
                    
                    
                    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
    <div className="borrrf">
    <div class="carousel-item active carcarusel">
        <ul className="carcarusel__list">
        
            <li className='carcarusel__list__item'>
          <img src={Img1} alt="" className='carcarusel__list__item__img' />
            
            </li>
            <li className='carcarusel__list__item'>
                <p className='carcarusel__list__item__title'>
                    Siz to’yingizni bir marotaba qilasiz. 
                    Ushbu kunni hech qachon etiborizdan 
                    chiqarmang.    
                </p>
                <div className="carcarusel__list__item__card">
                <button className='carcarusel__list__item__card__btn'>To’y oqshomi</button>
                <button className='carcarusel__list__item__card__btn'>Qiz bazimi</button>
                <button className='carcarusel__list__item__card__btn'>Unashtiruv</button>
                </div>
                <Link to="tel:998882064344" className='carcarusel__list__item__tel'>
                    Biz bilan bog’lanish
                </Link>
            </li>
        </ul>
    </div>
    
    
    <div class="carousel-item carcarusel">
        <ul className="carcarusel__list">
            <li className='carcarusel__list__item'>
                 <img src={Img2} alt=""  className='carcarusel__list__item__img'/>
            </li>
                 <li className='carcarusel__list__item'>
                <p className='carcarusel__list__item__title'>
                    Siz to’yingizni bir marotaba qilasiz. 
                    Ushbu kunni hech qachon etiborizdan 
                    chiqarmang.    
                </p>
                <div className="carcarusel__list__item__card">
                <button className='carcarusel__list__item__card__btn'>Yubiley</button>
                <button className='carcarusel__list__item__card__btn'>Muchal to’y</button>
                </div>
                <Link to="tel:998882064344" className='carcarusel__list__item__tel'>
                    Biz bilan bog’lanish
                </Link>
            </li>
        </ul>
        
    </div>
    <div class="carousel-item carcarusel">
    
        <ul className="carcarusel__list">
            <li className='carcarusel__list__item'>
                  <img src={Img3} alt="" className='carcarusel__list__item__img' />
            </li>
                <li className='carcarusel__list__item'>
                <p className='carcarusel__list__item__title'>
                    Siz to’yingizni bir marotaba qilasiz. 
                    Ushbu kunni hech qachon etiborizdan 
                    chiqarmang.    
                </p>
                <div className="carcarusel__list__item__card">
                <button className='carcarusel__list__item__card__btn'>Tug’ilgan kun</button>

                </div>
                <Link to="tel:998882064344" className='carcarusel__list__item__tel'>
                    Biz bilan bog’lanish
                </Link>
            </li>
        </ul>
        
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control" aria-hidden="true"><i class="fa-solid fa-chevron-left iconLeft"></i></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control" aria-hidden="true"><i class="fa-solid fa-chevron-right iconLeft"></i></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                    
                    
                    
                    
                    
                    {/* Carusell  and*/}
                    
                </div>
            </div>
    </div>
  )
}

export default MenegerOneSection