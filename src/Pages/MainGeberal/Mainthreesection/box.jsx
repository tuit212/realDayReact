import React from 'react'
import '../Mainthreesection/Box.scss'
function box({user:{video1,id}}){

  return (
    <div className='box'>
        <ul className="box__list">
          <li className="box__item" id={id}>
              <iframe  src={video1} className='box__item__video' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
          </li>
        </ul>
    </div>
  )
}

export default box