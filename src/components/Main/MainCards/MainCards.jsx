import React from 'react'
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
    </div>
  )
}

export default MainCards