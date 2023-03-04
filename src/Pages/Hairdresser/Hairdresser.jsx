import React from 'react'
import PagesHero from '../../common/PagesHero/PagesHero'
import './Hairdresser.scss'
import '../Wedding/Wedding.scss'
import PagesNav from '../../common/PagesNav/PagesNav'
import PagesConText from '../../common/PagesConText/PagesConText'

function Hairdresser() {
    return (
        <div className='section-ring' style={{paddingTop:'70px'}}>
            <div id="hairdresserHero">
                <PagesHero
                    title="Sartarosh/Stilistlar"
                    desc="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."
                    link = "/hairdresser"
                    text="Sartarosh/Stilistlar"
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

export default Hairdresser
