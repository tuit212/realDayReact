import React from 'react'
import PagesHero from '../../common/PagesHero/PagesHero'
import './Artists.scss'

function Artists() {
    return (
        <div className='section-ring' style={{paddingTop:'70px'}}>
            <div id="artistsHero">
                <PagesHero
                    title="San`atkorlar"
                    desc="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."
                    link = "/invitations"
                    text="San`atkorlar"
                />
            </div>
        </div>
    )
}

export default Artists
