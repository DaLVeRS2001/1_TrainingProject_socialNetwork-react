import React from "react";
import s from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
	return (
		<div className={s.content}>
			<ProfileInfo/>
			<PostsContainer
				store={props.store}
			/>
		</div>
	)
}


export default Profile






