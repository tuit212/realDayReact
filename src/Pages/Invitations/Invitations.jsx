import React from 'react'
import './Invitations.scss'
import PagesHero from '../../common/PagesHero/PagesHero'
import '../Wedding/Wedding.scss'
import PagesNav from '../../common/PagesNav/PagesNav'
import {posts} from '../../data/Invitations'
import PagesConText from '../../common/PagesConText/PagesConText'

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
            <div className='wedding_main'>
                <PagesNav/>
                <div className='wedding_right'>
                    {posts.map(post => (
                        <PagesConText key={post.id} post={post}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Invitations
