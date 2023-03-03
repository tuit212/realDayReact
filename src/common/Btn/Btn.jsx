import React from 'react' 
import './Btn.scss'
import { Link } from 'react-router-dom'

function Btn({link , text}) {
    return (
        <Link to={link} className='btn'>
            {text}
        </Link>
    )
}

export default Btn
