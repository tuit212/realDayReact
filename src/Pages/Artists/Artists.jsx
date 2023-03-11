import React from 'react'
import PagesHero from '../../common/PagesHero/PagesHero'
import './Artists.scss'
import '../Wedding/Wedding.scss'
import PagesNav from '../../common/PagesNav/PagesNav'

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
            <div className='wedding_main'>
                <PagesNav/>
                <div className='wedding_right'>
                </div>
            </div>
        </div>
    )
}

export default Artists
