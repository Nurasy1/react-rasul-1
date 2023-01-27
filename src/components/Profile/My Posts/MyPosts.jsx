import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import post from "./Post/Post";

const MyPosts = (props) => {
    let posts = [
        {id: 1, message: "Hi, How are you?", likesCount: 20},
        {id: 2, message: "It's my first post", likesCount: 15},
        {id: 3, message: "Bababui", likesCount: 15}
    ]

    let postsElements =
        posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>,
        );

    return (
        <div className={s.postBlock}>
            <h2>My Post</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}
export default MyPosts;