import React from "react";
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={s.header}>
			<img  src="https://yt3.ggpht.com/ytc/AAUvwnjQpUZbR79nyuZkKc85qH68HwXLcdGHrFPAPTnu=s900-c-k-c0x00ffffff-no-rj" alt=""/>

			<div className={s.loginBlock}>
				{props.isAuth
					? props.login
					: <NavLink to={'/login'}>Login</NavLink>
				}

			</div>
		</header>
	)
}


export default Header










