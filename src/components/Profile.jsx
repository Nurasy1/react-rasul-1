import React from 'react';
import s from './Profile.module.css';
const Profile = () => {
    return  <div className={s.content}>
        <img src="https://hmcurrentevents.com/wp-content/uploads/2011/03/Nature_Mountains.jpg"/>
        <div>
            ava+descpimtion
        </div>
        <div>
            My post
        </div>
        <div>
            New post
        </div>
        <div className={s.posts}>
            <div className={s.item}>
                Post1
            </div>
            <div className={s.item}>
                Post2
            </div>
        </div>
    </div>
}
export default Profile