import React from 'react'
import PagesHero from '../../common/PagesHero/PagesHero'
import './weddingCard.scss'
import '../Wedding/Wedding.scss'
import PagesNav from '../../common/PagesNav/PagesNav'
import PagesConText from '../../common/PagesConText/PagesConText'

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
            <div className='wedding_main'>
                <PagesNav/>
                <div className='wedding_right'>
                    <PagesConText/>
                    <PagesConText/>
                    <PagesConText/>
                    <PagesConText/>
                    <PagesConText/>
                </div>
            </div>
        </div>
    )
}

export default WeddingCars
