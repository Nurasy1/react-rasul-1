import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://hmcurrentevents.com/wp-content/uploads/2011/03/Nature_Mountains.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>

        </div>
    )
}
export default ProfileInfo;