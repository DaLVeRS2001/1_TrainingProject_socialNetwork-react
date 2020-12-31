import React from "react";
import s from "./Profile.module.scss";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	console.log(props.profilePage.postsData)
	return (
		<div className={s.content}>
			<ProfileInfo/>
			<Posts postsData={props.profilePage.postsData}/>
		</div>
	)
}


export default Profile






