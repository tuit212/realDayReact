import React from 'react'
import PagesHero from '../../common/PagesHero/PagesHero'
import './Wedding.scss'
import PagesNav from '../../common/PagesNav/PagesNav'
import PagesConText from '../../common/PagesConText/PagesConText'

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
            <div className='wedding_main'>
                <PagesNav/>
                <div className='wedding_right'>
                    <PagesConText/>
                    <PagesConText/>
                </div>
            </div>
        </div>
    )
}

export default Wedding
