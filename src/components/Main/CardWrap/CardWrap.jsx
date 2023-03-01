import React from 'react'
import CardsWrap from './CardsWrap/CardsWrap'
import './CardWrap.scss'

function CardWrap() {
    return (
        <div className='container'>
            <div className="cardWrap">
                <CardsWrap 
                    link="/"
                    icons={<i class="fa fa-credit-card"></i>}
                    desc="To’y uchun kredit kerakmi?"
                />
                <CardsWrap
                    link="sal"
                    icons={<i class="fa-solid fa-user-tie"></i>}
                    desc="Menenjer bilan to’yingizni o’tkazin"
                />
                <CardsWrap
                    link="sal"
                    icons={<i class="fa-thin fa-alarm-clock"></i>}
                    desc="Bizning Xizmatlar sizni kutmoqda"
                />
                <CardsWrap
                    link="sal"
                    icons={<i class="fa-light fa-user-headset"></i>}
                    desc="Mahsulot joylashtirish uchun Aloqa"
                />
            </div>
        </div>
    )
}

export default CardWrap
