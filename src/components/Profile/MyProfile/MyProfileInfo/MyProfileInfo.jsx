import React from "react";
import s from "./MyProfileInfo.module.scss";
import userImage from '../../../../assets/images/userImage.png'
import Preloader from "../../../common/Preloader/Preloader";
import MyProfileStatus from "./MyProfileStatus";
import axios from "axios";
import JobDescription from "../../JobDescription/JobDescription";

const MyProfileInfo = (props) => {
	const prof = props.profile
	let test = () => {
		axios.put('https://social-network.samuraijs.com/api/1.0/profile', {
			fullName: 'vladislav',
			aboutMe: 'no',
			lookingForAJobDescription: 'no'
		}, {
			withCredentials: true,
			headers: {'API-KEY': '21c5f7a8-45fb-489a-a4be-edcd3ba5e76d'},
		})
	}
	if (!props.profile) {
		return <Preloader/>
	}
	return (
		<div className={s.profileInfoBlock}>
			<div className={s.wrapper}>
				<div className={s.imgBlock}>
					<img src={prof.photos.small != null ? prof.photos.small : userImage} alt="Photo Wasn't Loaded"/>
				</div>
				{/*imgBlock*/}
				<div className={s.descriptionBlock}>
					<div className={s.name}>
						{prof.fullName}
						<JobDescription profile={props.profile}/>
					</div>
					<MyProfileStatus updateStatus={props.updateStatus} ownId={props.ownId} status={props.status}/>
					<hr/>
					<div className={s.aboutMe}>
						{prof.aboutMe}
						<button onClick={test}></button>
					</div>
				</div>
				{/*descriptionBlock*/}
			</div>
		</div>
	)
}
export default MyProfileInfo






