import React from 'react'
import '../MainCardsLeftTop/MainCardsLeftTop.scss'
import './MainCardsLeftBottom.scss'
import mainCardsLeftTop3 from '../../../../Assets/images/main/mainCard/card3.svg'
import HoverConText from '../../../../common/HoverConText/HoverConText'

function MainCardsLeftBottom() {
    return (
        <div>
            <div id='mainCardsLeftBottom'>
                <div id='img' >
                    <img src={mainCardsLeftTop3} alt="img" />
                    <HoverConText 
                        title="Fotostudio"
                        desc="Sifatli foto va video mahsulotlar"
                        link="/wedding"
                    />
                </div>
            </div>
        </div>
    )
}

export default MainCardsLeftBottom
