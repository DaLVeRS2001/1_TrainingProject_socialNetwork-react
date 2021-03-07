import React from "react";
import s from './SideBar.module.scss'
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {


	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to={props.ownId ? '/profile/'+props.ownId : '/login'} activeClassName={s.active}>My Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/users' activeClassName={s.active}>Users</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='#'>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='#'>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='#'>Settings</NavLink>
			</div>
		</nav>
	)
}

export default Sidebar


