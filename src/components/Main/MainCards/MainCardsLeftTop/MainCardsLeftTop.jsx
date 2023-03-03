import React from 'react'
import './MainCardsLeftTop.scss'
import mainCardsLeftTop from '../../../../Assets/images/main/mainCard/card.png'
import mainCardsLeftTop1 from '../../../../Assets/images/main/mainCard/card1.svg'
import mainCardsLeftTop2 from '../../../../Assets/images/main/mainCard/card2.svg'
import HoverConText from '../../../../common/HoverConText/HoverConText'

function MainCardsLeftTop() {
    return (
        <div className='mainCardsLeftTop'>
            <div id='mainCardsLeftTop'>
                <div id='img' >
                    <img src={mainCardsLeftTop} alt="img" />
                    <HoverConText 
                        title="To’yxona"
                        desc="500 kishilik"
                        link="/wedding"
                    />
                </div>
            </div>
            <div id="mainCardsLeftTop">
                <div id="img">
                    <img src={mainCardsLeftTop1} alt="img" />
                    <HoverConText 
                        title="Boshlovchilar"
                        desc="500 kishilik"
                        link="/wedding"
                    />
                </div>
                <div id="img">
                    <img src={mainCardsLeftTop2} alt="img" style={{marginTop:"18px"}} />
                    <HoverConText 
                        title="Stilist"
                        desc="Soch turmagi va liboslar"
                        link="/wedding"
                    />
                </div>

            </div>
        </div>
    )
}

export default MainCardsLeftTop
