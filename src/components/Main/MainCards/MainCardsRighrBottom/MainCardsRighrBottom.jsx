import React from 'react'
import mainCardsLeftTop from '../../../../Assets/images/main/mainCard/card.png'
import mainCardsLeftTop4 from '../../../../Assets/images/main/mainCard/card4.svg'
import HoverConText from '../../../../common/HoverConText/HoverConText'

function MainCardsRighrBottom() {
    return (
        <div style={{display:"flex" , gap: "24px" , marginTop:"20px"}}>
            <div id='mainCardsLeftTop'>
                <div id='img' >
                    <img src={mainCardsLeftTop4} alt="img" />
                    <HoverConText 
                        title="Uzuklar"
                        desc="To’yxona va banketlarni bezash"
                        link="/wedding"
                    />
                </div>
            </div>
            <div id='mainCardsLeftTop'>
                <div id='img' >
                    <img src={mainCardsLeftTop} alt="img" />
                    <HoverConText 
                        title="Sahna bezagi"
                        desc="To’yxona va banketlarni bezash"
                        link="/wedding"
                    />
                </div>
            </div>
        </div>
    )
}

export default MainCardsRighrBottom
