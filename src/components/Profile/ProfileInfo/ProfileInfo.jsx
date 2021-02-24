import React from "react";
import s from "./ProfileInfo.module.scss";
import userImage from '../../../assets/images/userImage.png'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus.jsx"

const ProfileInfo = (props) => {
	const prof = props.profile


	if (!props.profile){
		return <Preloader/>
	}
		return (
		<div className={s.profileInfoBlock}>
			<div>
				<img src={prof.photos.small != null ? prof.photos.small : userImage} alt="Photo Wasn't Loaded"/>
				<ProfileStatus updateStatus={props.updateStatus} userId={props.userId} status={props.status}/>
			</div>

			<div className={s.descriptionBlock}>
				<div className={s.aboutMe}>
					{prof.fullName}
					{prof.aboutMe}
				</div>
			</div>
		</div>
	)
}


export default ProfileInfo






