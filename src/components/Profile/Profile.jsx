import React from "react";
import s from "./Profile.module.scss";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
	return (
		<div className={s.content}>
			<ProfileInfo/>
			<Posts/>
		</div>
	)
}


export default Profile






