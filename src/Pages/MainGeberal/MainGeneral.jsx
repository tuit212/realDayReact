import React from 'react'
import Mainthreesection from './Mainthreesection/Mainthreesection'
import MenegerOneSection from './MenegerOneSection/MenegerOneSection'
import MenegerTwoSection from './MenegerTwoSection/MenegerTwoSection'
import MenejerHeader from './MenejerHeader/MenejerHeader'

function MainGeneral() {
    return (
        <div className='section-menejer' style={{paddingTop:'70px'}}>
            <MenejerHeader/>
            <MenegerOneSection/>
            <MenegerTwoSection />
            <Mainthreesection/>
        </div>
    )
}


export default MainGeneral
