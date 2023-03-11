import React from 'react'
import '../../common/DetalsItem/DetalsItem.scss'
import { useParams } from 'react-router-dom'
import {posts} from '../../data/Invitations'

function InvitationsItem() {

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

export default InvitationsItem
