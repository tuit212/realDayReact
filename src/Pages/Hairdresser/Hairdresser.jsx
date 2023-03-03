import React from 'react'
import PagesHero from '../../common/PagesHero/PagesHero'
import './Hairdresser.scss'

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
        </div>
    )
}

export default Hairdresser
