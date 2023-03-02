import React from 'react'
import '../WeddingMain/WeddingMain.scss'
import img1 from '.././img/image01.svg'
import img2 from '.././img/image02.svg'
import img3 from '.././img/image03.svg'
import img4 from '.././img/image04.svg'
import img5 from '.././img/image05.svg'
import img6 from '.././img/image06.svg'
import img7 from '.././img/image07.svg'
function WeddingMainRight() {
  return (
    <div className=" WeddingMainRight">
          <div className="box">
            <ul className="box__list">
              <li className='box__list__item'>
                  <img src={img1} alt="" className='box__list__item__image1'/>
                  
                  <img src={img1} alt="" className='box__list__item__image'/>
                  <img src={img2} alt="" className='box__list__item__image'/>
                  <img src={img3} alt="" className='box__list__item__image'/>
              </li>
              <li className='box__list__item1'>
                    <div className="box__list__item1__card">
                  <img src={img5} alt="" className='box__list__item1__card__image' />
                      <div className="box__list__item1__card__box">
                        <h3 className='box__list__item1__card__box__title'>500</h3>
                        <p className="box__list__item1__card__box__text">Sig‘imi</p>
                      </div>
                    </div>
              <span className='box__list__span'></span>
                    
                     <div className="box__list__item1__card">
                  <img src={img6} alt="" className='box__list__item1__card__image' />
                      <div className="box__list__item1__card__box">
                        <h3 className='box__list__item1__card__box__title'>40 000-100 000 so‘m</h3>
                        <p className="box__list__item1__card__box__text">Narxi(kishi boshiga)</p>
                      </div>
                    </div>
              <span className='box__list__span'></span>
                    
                     <div className="box__list__item1__card">
                  <img src={img7} alt="" className='box__list__item1__card__image' />
                      <div className="box__list__item1__card__box">
                        <h3 className='box__list__item1__card__box__title'>Bor</h3>
                        <p className="box__list__item1__card__box__text">Qo‘shimcha bonus</p>
                      </div>
                    </div>
              </li>
            </ul>
          </div>
    </div>
  )
}

export default WeddingMainRight