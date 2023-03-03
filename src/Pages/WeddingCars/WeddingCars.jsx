import React from 'react'
import PagesHero from '../../common/PagesHero/PagesHero'
import './weddingCard.scss'

function WeddingCars() {
    return (
        <div className='section-cars' style={{paddingTop:'70px'}}>
            <div id='carsHero'>
                <PagesHero
                    title="To‘y avtomobilllari"
                    desc="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."
                    link = "/weddingCard"
                    text='To’y avtomobillari'
                />
            </div>
        </div>
    )
}

export default WeddingCars
