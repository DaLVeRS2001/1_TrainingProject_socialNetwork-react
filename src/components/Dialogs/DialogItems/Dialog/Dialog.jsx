import React from "react";
import s from './Dialog.module.scss'
import {NavLink} from "react-router-dom";


const Dialog = (props, ) => {
	return (
		<NavLink  className={s.dialog} to={props.dialogPath} activeClassName={s.active}>{props.userName}</NavLink>
	)
}

export default Dialog










