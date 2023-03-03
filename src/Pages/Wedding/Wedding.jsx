import React from 'react'
import './Wedding.scss'
import WeddingHero from './WeddingHero/WeddingHero'
import WeddingMainBody from './WeddingMain/WeddingMainBody'

function Wedding() {
    return (
    <>
        <div className='hero_section'>
            <div className='container wedding'>
                <WeddingHero/>
            </div>
       </div>
        <WeddingMainBody/>
    </>
     
    )
}

export default Wedding
