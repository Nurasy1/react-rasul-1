import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://uprostim.com/wp-content/uploads/2021/03/image096-74.jpg'/>
            Post1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post;