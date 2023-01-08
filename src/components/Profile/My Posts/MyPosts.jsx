import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    debugger;
    return (
        <div>
            My Post
            <div>
                <textarea></textarea>
                <button>fewfw</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, How are you?' like='20'/>
                <Post message="It's my first post" like='15'/>


            </div>
        </div>
    )
}
export default MyPosts;