import React from 'react'
import './PagesConText.scss'
import PagesConTextBottom from './PagesConTextBottom'
import PagesConTextCenter from './PagesConTextCenter'
import PagesContextTop from './PagesContextTop'

function PagesConText() {
    return (
        <div className='pages-context'>
            <PagesContextTop />
            <PagesConTextCenter/>
            <PagesConTextBottom/>
        </div>
    )
}

export default PagesConText
