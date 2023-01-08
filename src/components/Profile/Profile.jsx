import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./My Posts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://hmcurrentevents.com/wp-content/uploads/2011/03/Nature_Mountains.jpg"/>
            <div>
                ava+descpimtion
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile;