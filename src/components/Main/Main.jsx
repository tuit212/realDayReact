import React from 'react'
import CardWrap from './CardWrap/CardWrap'
import Carousel from './Caruosel/Carousel'
import MainCards from './MainCards/MainCards'
import Services from './Services/Services'

function Main() {
    return (
        <div style={{paddingTop:"100px" , position:"relative"}}>
            <Carousel/>
            <CardWrap/>
            <Services/>
            <MainCards/>
        </div>
    )
}

export default Main
