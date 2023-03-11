import React from 'react'
import PagesHero from '../../common/PagesHero/PagesHero'
import './Flowers.scss'
import '../Wedding/Wedding.scss'
import PagesNav from '../../common/PagesNav/PagesNav'
import {posts} from '../../data/Flowers'
import PagesConText from '../../common/PagesConText/PagesConText'

function Flowers() {
    return (
        <div className='section-ring' style={{paddingTop:'70px'}}>
            <div id="flowersHero">
                <PagesHero
                    title="Gullar"
                    desc="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."
                    link = "/flowers"
                    text="Gullar"
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

export default Flowers
