import React from "react";
import s from "./Profile.module.scss";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div className={s.content}>
			<ProfileInfo/>
			<Posts
				postsData={props.state.postsData}
				newPostText={props.state.newPostText}
				dispatch={props.dispatch}
			/>
		</div>
	)
}


export default Profile






