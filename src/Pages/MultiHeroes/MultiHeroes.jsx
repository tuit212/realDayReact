import React from 'react'
import PagesHero from '../../common/PagesHero/PagesHero'
import './MultiHeroes.scss'
import '../Wedding/Wedding.scss'
import PagesNav from '../../common/PagesNav/PagesNav'


function MultiHeroes() {
    return (
        <div className='section-ring' style={{paddingTop:'70px'}}>
            <div id="multiHero">
                <PagesHero
                    title="Multi qahramonlar"
                    desc="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."
                    link = "/multiHeroes"
                    text="Multi qahramonlar"
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

export default MultiHeroes
