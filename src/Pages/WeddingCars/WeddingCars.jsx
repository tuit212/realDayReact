import React from 'react'
import PagesHero from '../../common/PagesHero/PagesHero'
import './weddingCard.scss'
import '../Wedding/Wedding.scss'
import PagesNav from '../../common/PagesNav/PagesNav'
import {posts} from "../../data/weddingCars"
import PagesConText from '../../common/PagesConText/PagesConText'


function WeddingCars() {
    return (
        <div className='section-cars' style={{paddingTop:'70px'}}>
            <div id='carsHero'>
                <PagesHero
                    title="To‘y avtomobilllari"
                    desc="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."
                    link = "/weddingCard"
                    text='To’y avtomobillari'
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

export default WeddingCars
