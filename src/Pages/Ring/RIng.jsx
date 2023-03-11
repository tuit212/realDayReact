import React from 'react'
import PagesHero from '../../common/PagesHero/PagesHero'
import './Ring.scss'
import '../Wedding/Wedding.scss'
import PagesNav from '../../common/PagesNav/PagesNav'
import {posts} from '../../data/RIng'
import PagesConText from '../../common/PagesConText/PagesConText'

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

export default RIng
