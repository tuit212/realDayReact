import React from 'react'
import MenegerOneSection from './MenegerOneSection/MenegerOneSection'
import MenejerHeader from './MenejerHeader/MenejerHeader'

function MainGeneral() {
    return (
        <div className='section-menejer' style={{paddingTop:'70px'}}>
            <MenejerHeader/>
            <MenegerOneSection/>
        </div>
    )
}


export default MainGeneral
