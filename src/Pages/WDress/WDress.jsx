import React from 'react'
import PagesHero from '../../common/PagesHero/PagesHero'
import './WDress.scss'
import '../Wedding/Wedding.scss'
import PagesNav from '../../common/PagesNav/PagesNav'

function WDress() {
    return (
        <div className='section-ring' style={{paddingTop:'70px'}}>
            <div id="wDressHero">
                <PagesHero
                    title="Liboslar"
                    desc="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."
                    link = "/weddingDresses"
                    text="Liboslar"
                />
            </div>
            <div className='wedding_main'>
                <PagesNav/>
                <div className='wedding_right'>
                </div>
            </div>
        </div>
    )
}

export default WDress
