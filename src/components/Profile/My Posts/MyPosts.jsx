import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postData  = [
        {id: 1, message: "Hi, How are you?", likesCount: 20 },
        {id: 2, message: "It's my first post", likesCount: 15 }


    ]
    return (
        <div className={s.postBlock}>
           <h2>My Post</h2>
            <div>
                <div>
                <textarea></textarea>
                    </div><div>
                <button>Add post</button>
            </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0]. message} likesCount={postData[0].likesCount} />
                <Post message={postData[1]. message} likesCount={postData[1].likesCount}/>


            </div>
        </div>
    )
}
export default MyPosts;