import React from "react";
import s from './HeaderMenu.module.scss'
import userImg from "../../../assets/images/userImage.png"
import {createRef} from "react/cjs/react.production.min";
import {NavLink} from "react-router-dom";



const HeaderMenu = (props) => {
	const menuRef = createRef()

	const toggleHidden = () => {
		menuRef.current.hidden = !menuRef.current.hidden
	}

	return (
		<div  className={s.headerMenu}>
			<div onClick={toggleHidden}  className={s.wrapper}>
				{props.login}
				<img className={s.menuAva} src={props.ownPhoto ? props.ownPhoto : userImg} alt="Photo Wasn't Loaded"/>
				<div className={s.menuBtn}> > </div>
			</div>

			<div hidden={true} ref={menuRef} className={s.headerMenuShown}>
				<NavLink to={`/profile/${props.ownId}`} className={s.menuShownHeader}>
					<img className={s.menuAva} src={props.ownPhoto ? props.ownPhoto : userImg} alt="Photo Wasn't Loaded"/>
					{props.login}
				</NavLink><hr/>


				<div  className={s.menuShownMain}>
					<NavLink to={'/setting'}>Setting</NavLink>
				</div><hr/>

				<div onClick={props.onLogout} className={s.menuShownFooter}>
					Sign out
				</div>
			</div>

		</div>
	)
}


export default HeaderMenu










