import React from 'react'
import CardWrap from './CardWrap/CardWrap'
import Carousel from './Caruosel/Carousel'

function Main() {
    return (
        <div style={{paddingTop:"100px" , position:"relative"}}>
            <Carousel/>
            <CardWrap/>
        </div>
    )
}

export default Main
