import React from "react";
import s from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
	return (
		<div className={s.content}>
			{props.isFetching && <Preloader/>}
			<ProfileInfo profile={props.profile}/>
			<PostsContainer/>
		</div>
	)
}


export default Profile






