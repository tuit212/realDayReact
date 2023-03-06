import React from 'react'
import './PagesConText.scss'
import { Link } from 'react-router-dom'

function PagesConText({post}) {
    return (
        <div className='pages-context'>
            <Link className='link' to={`${post.id}`} >
                <div className="pages__context-top">
                    <div className="top__context">
                        <div className="border_top"></div>
                        <ul>
                            <h3>{post.title}</h3>
                            <div>
                                <i class="fa-solid fa-location-dot"></i>
                                <span>{post.desc}</span>
                            </div>
                        </ul>
                    </div>
                    <div className="top-right">
                        <i class="fa-solid fa-location-dot"></i>
                        <Link to={"/karta"} className='link' >
                            Kartada
                        </Link>
                    </div>
                </div>
                <div className='img__content'>
                    <Link  className='link'>
                        <img src={post.images} alt="" />
                    </Link>
                    <Link  className='link'>
                        <img src={post.img1} alt="" />
                    </Link>
                    <Link  className='link'>
                        <img src={post.img3} alt="" />
                    </Link>
                    <Link className='link'>
                        <img src={post.images} alt="" />
                    </Link>
                    <Link className='link'>
                        <img src={post.img1} alt="" />
                    </Link>
                    <Link className='link'>
                        <img src={post.img3} alt="" />
                    </Link>
                </div>
                <div className='pages__bottom'>
                    <ul className='list'>
                        <li className='item'>
                            <div>
                                <img src={post.people} alt="" />
                            </div>
                            <div>
                                <p className='title'>{post.bottom}</p>
                                <span className='line'></span>
                                <p className='text'>{post.text}</p>
                            </div>
                        </li>
                        <li className='item'>
                            <div>
                                <img src={post.salary} alt="" />
                            </div>
                            <div>
                                <p className='title'>{post.bottom1}</p>
                                <span className='line'></span>
                                <p className='text'>{post.text1} <span>({post.text2})</span> </p>
                            </div>
                        </li>
                        <li className='item'>
                            <div>
                                <img src={post.gift} alt="" />
                            </div>
                            <div>
                                <p className='title'>{post.bottom3}</p>
                                <span className='line'></span>
                                <p className='text'>{post.text3}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </Link>
        </div>
    )
}

export default PagesConText
