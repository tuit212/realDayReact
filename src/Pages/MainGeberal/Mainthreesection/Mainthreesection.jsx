import React from 'react'
import "../Mainthreesection/Mainthreesection.scss"
import {Link} from 'react-router-dom' 
import Cardflist from './Cardflist'
function Mainthreesection() {
  
  return (
    <div className='Mainthreesection'>
        <div className="container">
            <div className="box">
                <Cardflist/>
                <Link to="/" className='box__btn'>Barcha rasmlarni ko’rish</Link>
            </div>
        </div>
    </div>
  )
}

export default Mainthreesection