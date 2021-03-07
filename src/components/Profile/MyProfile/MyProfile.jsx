import React from "react";
import s from "./MyProfile.module.scss";
import Preloader from "../../common/Preloader/Preloader";
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo";

const MyProfile = (props) => {
	return (
		<div className={s.content}>
			{props.isFetching && <Preloader/>}
			<MyProfileInfo
				updateStatus={props.updateStatus}
				status={props.status}
				ownId={props.ownId}
				profile={props.profile}
			/>
		</div>
	)
}


export default MyProfile






