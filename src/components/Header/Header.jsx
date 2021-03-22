import React from "react";
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
import mainImg from "../../assets/images/s2.jpg"
import HeaderMenu from "./HeaderMenu/HeaderMenu";


const Header = (props) => {

	return (
		<header className={s.header}>
			<img className={s.siteIcon}  src={mainImg} alt=""/>

			<div className={s.loginBlock}>
				{props.isAuth
					? <HeaderMenu onLogout={props.onLogout} {...props} />
					: <NavLink className={s.loginLink} to={'/login'}>Login</NavLink>
				}
			</div>
		</header>

	)
}


export default Header










