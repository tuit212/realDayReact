import React from 'react' 
import './Btn.scss'
import { Link } from 'react-router-dom'

function Btn({link , text,title}) {
    return (
        <Link to={link} className='btn'>
            {text}
            {title}
        </Link>
    )
}

export default Btn
