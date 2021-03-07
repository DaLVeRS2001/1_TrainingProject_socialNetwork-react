import React from "react";
import s from "./UsersProfile.module.scss";
import UsersProfileInfo from "./UsersProfileInfo/UsersProfileInfo";
import Preloader from "../../common/Preloader/Preloader";

const UsersProfile = (props) => {
	let userId = props.match.params.userId
	return (
		<div className={s.content}>
			{props.isFetching && <Preloader/>}
			<UsersProfileInfo
				updateStatus={props.updateStatus}
				status={props.status}
				userId={userId}
				profile={props.profile}
			/>
		</div>
	)
}


export default UsersProfile






