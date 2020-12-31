import React from "react";
import s from './Dialog.module.scss'
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
	const path = '/dialogs/' + props.id;

	return (
		<NavLink id={props.id} className={s.dialog} to={path} activeClassName={s.active}>{props.userName}</NavLink>
	)
}

export default Dialog










