import React from "react";
import s from './User.module.scss'
import userImage from '../../../assets/images/userImage.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";



const User = (props) => {
		let ud = props.userData

	function onUserFolllow(e) {
		axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${ud.id}`, {}, {
			withCredentials: true,
			headers: {
				'API-KEY': '21c5f7a8-45fb-489a-a4be-edcd3ba5e76d'
			}
		})
			.then(response => {
				if (response.data.resultCode == 0) {
					props.toggleFollow(ud.id)
				}else{
					alert('ошибка в запросе')
				}
			})
	}

	function onUserUnfollow(e) {
		axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${ud.id}`, {
			withCredentials: true,
			headers: {
				'API-KEY': '21c5f7a8-45fb-489a-a4be-edcd3ba5e76d'
			}
		})
			.then(response => {
				if (response.data.resultCode === 0) {
					props.toggleFollow(ud.id)
				}else{
					alert('ошибка в запросе')
				}
			})
	}

		return (
			<div id={ud.id} className={s.user} key={ud.id}>

				<div className={s.avaBtn}>
					<NavLink  to={'/profile/'+ ud.id}>
						<img
							src={ud.photos.small != null ? ud.photos.small : userImage}
							alt='it wasnt loaded'
						/>
					</NavLink><br/>

					<button onClick={ud.followed ? onUserUnfollow : onUserFolllow}>
						{ud.followed ? 'Unfollow' : 'Follow'}
					</button>
				</div>

				<div className={s.userInfo}>
					<div className={s.mainInfo}>
						<div className={s.name}>{ud.name}</div>
						<div className={s.status}>{ud.status}</div>
					</div>
					<div className={s.location}>
						<div className={s.country}>{'ud.location.country'},</div>
						<div className={s.city}>{'ud.location.city'}</div>
					</div>
				</div>

			</div>
		)
	}




export default User
