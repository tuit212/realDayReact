import React from 'react'
import { posts } from '../../data/wedding'
import './DetalsItem.scss'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'




function DetalsItem() {

    const {id} = useParams();

    const post = posts.find((item) => item.id === id - 0)
    // SailingOutlined


    return (
        <div className='detalsItem-section'>
            <div className="container wedding">
                <div className="item__top">
                    <div className='img'>
                        <img src={post.images} alt={post.title} className='item__top-img' />
                    </div>
                    <div className='content'>
                        <img className='logo' src={post.logo} alt="" />
                        <h3 cl className="item__top-title">
                            {post.title}
                        </h3>
                        <p className='text'>{post.desc}</p>
                        <div className="button">
                            <button className='b'>Online band qilish</button>
                            <Link className='link' to={"tel:+998912989808"}>Aloqa qilish</Link>
                        </div>
                        <div className="boxContent">
                            <h4>{post.title}</h4>
                        </div>
                        <div className="linkContent">
                            <span>Band bo’lgan kunlarni ko’rish</span>
                            <i class="fa-solid fa-calendar-days"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetalsItem
