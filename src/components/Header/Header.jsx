import React from "react";
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
import imgSm2 from "../../assets/images/s2.jpg"
import userImg from "../../assets/images/userImage.png"
import Preloader from "../common/Preloader/Preloader";


const Header = (props) => {
	const prof = props.profile

	return (
		<header className={s.header}>
			<img  src={imgSm2} alt=""/>

			<div className={s.loginBlock}>
				{props.isAuth
					? <div className={s.headerMenu}>
						 <span onClick={props.onLogout}>Sign out</span>
						{props.login}
						<img src={props.ownPhoto ? props.ownPhoto : userImg}  alt="Photo Wasn't Loaded"/>
					  </div>
					: <NavLink to={'/login'}>Login</NavLink>
				}

			</div>
		</header>
	)
}


export default Header










