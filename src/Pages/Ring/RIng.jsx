import React from 'react'
import PagesHero from '../../common/PagesHero/PagesHero'
import './Ring.scss'

function RIng() {
    return (
        <div className='section-ring' style={{paddingTop:'70px'}}>
            <div id="ringHero">
                <PagesHero
                    title="Uzuklar"
                    desc="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."
                    link = "/ring"
                    text="Uzuklar"
                />
            </div>
        </div>
    )
}

export default RIng
