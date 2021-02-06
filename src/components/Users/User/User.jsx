import React from "react";
import s from './User.module.scss'
import userImage from '../../../assets/images/userImage.png'
import {NavLink} from "react-router-dom";



const User = (props) => {
		let ud = props.userData

		return (
			<div id={ud.id} className={s.user} key={ud.id}>

				<div className={s.avaBtn}>
					<NavLink  to={'/profile/'+ ud.id}>
						<img
							src={ud.photos.small != null ? ud.photos.small : userImage}
							alt='it wasnt loaded'
						/>
					</NavLink><br/>
					<button onClick={() => {props.toggleFollow(ud.id)}}>
						{ud.followed ? 'Follow' : 'Unfollow'}
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
