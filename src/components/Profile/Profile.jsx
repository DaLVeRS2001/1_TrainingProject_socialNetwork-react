import React from "react";
import s from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
	let userId = props.match.params.userId
	console.log(props)
	return (
		<div className={s.content}>
			{props.isFetching && <Preloader/>}
			<ProfileInfo status={props.status} userId={userId} profile={props.profile}/>
			<PostsContainer/>
		</div>
	)
}


export default Profile






