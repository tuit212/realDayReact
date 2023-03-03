import React from 'react'
import './StageDecoration.scss'
import PagesHero from '../../common/PagesHero/PagesHero'

function StageDecoration() {
    return (
        <div className='section-ring' style={{paddingTop:'70px'}}>
            <div id="sahnaHero">
                <PagesHero
                    title="Sahna bezaklari"
                    desc="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."
                    link = "/stageDecoration"
                    text="Sahna bezaklari"
                />
            </div>
        </div>
    )
}

export default StageDecoration
