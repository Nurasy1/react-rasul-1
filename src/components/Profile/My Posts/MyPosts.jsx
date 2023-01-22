import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    debugger;
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
                <Post message='Hi, How are you?' likesCount='20'/>
                <Post message="It's my first post" likesCount='15'/>


            </div>
        </div>
    )
}
export default MyPosts;