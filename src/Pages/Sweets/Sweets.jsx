import React from 'react'
import PagesHero from '../../common/PagesHero/PagesHero'
import '../Wedding/Wedding.scss'
import './Sweets.scss'
import PagesNav from '../../common/PagesNav/PagesNav'
import {posts} from '../../data/Sweets'
import PagesConText from '../../common/PagesConText/PagesConText'

function Sweets() {
    return (
        <div className='section-ring' style={{paddingTop:'70px'}}>
            <div id="sweets">
                <PagesHero
                    title="Shirinliklar"
                    desc="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."
                    link = "/sweets"
                    text="Shirinliklar"
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

export default Sweets
