import React from "react";
import s from "./UsersProfileInfo.module.scss";

const UsersProfileStatus = (props) => {
	return (
		<div className={s.statusBlock}>
			<div className={s.status}><span>{props.status}</span></div>
		</div>
	)
}



export default UsersProfileStatus