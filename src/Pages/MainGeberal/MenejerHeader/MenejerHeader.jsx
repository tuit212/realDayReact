import React from 'react'
import './MenejerHeader.scss'
function MenejerHeader() {
  return (
    <div className='MenejerHeader'>
        <div className="container">
            <div className="box">
                <h1 className="box__title">
                    Menenjer xizmati
                </h1>
                <p className="box__text">
                    Barcha xizmatlarni kredit orqali yopish imkoni
                </p>
                <button className="box__btn">
                     Biz haqimizda
                </button>
            </div>
        </div>
    </div>
  )
}

export default MenejerHeader