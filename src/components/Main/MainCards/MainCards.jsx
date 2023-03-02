import React from 'react'
import Btn from '../../../common/Btn/Btn'
import './mainCards.scss'
import MainCardsLeftBottom from './MainCardsLeftBottom/MainCardsLeftBottom'
import MainCardsLeftTop from './MainCardsLeftTop/MainCardsLeftTop'
import MainCardsRighrBottom from './MainCardsRighrBottom/MainCardsRighrBottom'
import MainCardsRightTop from './MainCardsRightTop/MainCardsRightTop'

function MainCards() {
  return (
    <div className='container mainCards'>
      <div className="mainCards-section">
        <div className="MainCardsLeft">
          <MainCardsLeftTop/>
          <MainCardsLeftBottom/>
        </div>
        <div className="MainCardsRight">
           <MainCardsRightTop />
           <MainCardsRighrBottom/>
        </div>
      </div>
      <Btn text="Barchasini ko’rish" link={"/salom"} />
    </div>
  )
}

export default MainCards