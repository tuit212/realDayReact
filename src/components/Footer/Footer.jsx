import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import logo from '../../Assets/images/logo.svg'

function Footer() {
    return (
        <div className='footer__section'>
            <div className="footer__top">
                <div className="container">
                    <div className="footer">
                        <ul className='list'>
                            <li className="item">
                                <Link to={"/"}>
                                    LOGO
                                </Link>
                            </li>
                            <li className="item">
                                <Link to={"/register"}>
                                    Registratsiyadan o’tish
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer-bottom">
                        <p>2023-yil</p>
                        <p>GROUP tomonidan Ishlab chiqilgan </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
