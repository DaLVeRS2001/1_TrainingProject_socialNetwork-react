import React from "react";
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
import imgSm2 from "../../assets/images/s2.jpg"

const Header = (props) => {
	return (
		<header className={s.header}>
			<img  src={imgSm2} alt=""/>

			<div className={s.loginBlock}>
				{props.isAuth
					? <div>
						 <span onClick={props.onLogout}>Sign out</span>
						{props.login}
					  </div>
					: <NavLink to={'/login'}>Login</NavLink>
				}

			</div>
		</header>
	)
}


export default Header










