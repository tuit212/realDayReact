import React from 'react'
import './StageDecoration.scss'
import PagesHero from '../../common/PagesHero/PagesHero'
import '../Wedding/Wedding.scss'
import PagesNav from '../../common/PagesNav/PagesNav'
import PagesConText from '../../common/PagesConText/PagesConText'

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

export default StageDecoration
