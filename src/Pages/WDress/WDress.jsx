import React from 'react'
import PagesHero from '../../common/PagesHero/PagesHero'
import './WDress.scss'
import '../Wedding/Wedding.scss'
import PagesNav from '../../common/PagesNav/PagesNav'
import {posts} from "../../data/WDress"
import PagesConText from '../../common/PagesConText/PagesConText'

function WDress() {
    return (
        <div className='section-ring' style={{paddingTop:'70px'}}>
            <div id="wDressHero">
                <PagesHero
                    title="Liboslar"
                    desc="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."
                    link = "/weddingDresses"
                    text="Liboslar"
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

export default WDress
