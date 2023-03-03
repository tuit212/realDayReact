import React from 'react'
import PagesHero from '../../common/PagesHero/PagesHero'
import './Wedding.scss'

function Wedding() {
    return (
        <div className='section-ring' style={{paddingTop:'70px'}}>
            <div id="weddingHero">
                <PagesHero
                    title="To’yxonalar, Banketniy zal"
                    desc="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."
                    link = "/wedding"
                    text="To’yxonalar"
                />
            </div>
        </div>
    )
}

export default Wedding
