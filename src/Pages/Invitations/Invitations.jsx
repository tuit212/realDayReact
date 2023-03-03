import React from 'react'
import './Invitations.scss'
import PagesHero from '../../common/PagesHero/PagesHero'

function Invitations() {
    return (
        <div className='section-ring' style={{paddingTop:'70px'}}>
            <div id="InvitationsHero">
                <PagesHero
                    title="Taklifnomalar"
                    desc="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."
                    link = "/invitations"
                    text="Taklifnomalar"
                />
            </div>
        </div>
    )
}

export default Invitations
