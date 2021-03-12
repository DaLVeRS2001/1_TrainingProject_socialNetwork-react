import React from "react";
import s from "./MyProfileInfo.module.scss";
import userImage from '../../../../assets/images/userImage.png'
import Preloader from "../../../common/Preloader/Preloader";
import MyProfileStatus from "./MyProfileStatus";
import JobDescription from "../../PofileCommon/JobDescription/JobDescription";

import ContactsMenu from "../../PofileCommon/ContactsMenu/ContactsMenu";


const MyProfileInfo = (props) => {
	const prof = props.profile


	if (!props.profile) {
		return <Preloader/>
	}


	return (
		<div className={s.profileInfoBlock}>
			<div className={s.wrapper}>

				<div className={s.imgBlock}>
					<img src={prof.photos.small != null ? prof.photos.small : userImage} alt="Photo Wasn't Loaded"/>
				</div>

				<div className={s.descriptionBlock}>
					<div className={s.name}>
						<div	className={s.nameWrapper}>{prof.fullName}</div>
						<JobDescription profile={props.profile}/>
					</div>

					<MyProfileStatus updateStatus={props.updateStatus} ownId={props.ownId} status={props.status}/>
					<hr/>

					<div className={s.aboutMe}>
						<span className={s.aboutMeField}>About Me:</span>{prof.aboutMe}
					</div>
					<hr/>

					<ContactsMenu profile={props.profile} />
				</div>{/*descriptionBlock*/}

			</div>
		</div>
	)
}

// let test = () => {
// 	axios.put('https://social-network.samuraijs.com/api/1.0/profile',  {
// 		"aboutMe": "я круто чувак 1001%",
// 		"contacts": {
// 			github: null,
// 			youtube: null,
// 			skype: "skyp.com",
// 			vk: "vk.com",
// 			facebook: "facebook.com",
// 			email: "email.com",
// 			googlePlus: "gogep.com",
// 			twitter: "twitter.com",
// 			instagram: "instagram.com",
// 			whatsApp: "watsap.com"
// 		},
// 		"lookingForAJob": true,
// 		"lookingForAJobDescription": 'ищу',
// 		"fullName": "Vladislav"
// 	}, {
// 		withCredentials: true,
// 		headers: {'API-KEY': '21c5f7a8-45fb-489a-a4be-edcd3ba5e76d'},
// 	})
// }



export default MyProfileInfo






