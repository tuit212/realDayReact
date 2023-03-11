import React from 'react'
import {posts} from '../../data/weddingCars'
import { useParams } from 'react-router-dom'
import "../DetalsItem/DetalsItem.scss"

function WeddingCarsItem() {
    const {id} = useParams();
    const post = posts.find((item) => item.id === id - 0)
    console.log(posts);

    return (
        <div className='detalsItem-section'>
            <div className="item__top">
                <div>
                    <img src={post.images} alt={post.title} className='item__top-img' />
                </div>
                <div>
                    <h3 className="item__top-title">
                        {post.title}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default WeddingCarsItem
