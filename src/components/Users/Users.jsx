import React from "react";
import s from './Users.module.scss'
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";

const Users = (props) => {
	let pageCount = Math.ceil(props.totalUsersCount / props.count)

	return (
			<div className={s.usersBlock}>
				{props.isFetching && <Preloader/>}
				Users
				<div className={s.pageSwitches}>
					<button onClick={()=> props.onPrevPageChanged(props.currentPage)} className={s.prevPageBtn}>Prev Page</button>
					<button onClick={()=> props.onNextPageChanged(props.currentPage, pageCount)} className={s.nextPageBtn}>Next Page</button>
					<span>{props.currentPage} OF {pageCount}</span>
				</div>

				<div className={s.users}>
					{props.usersData.map(u => <User userData={u} toggleFollow={props.toggleFollow}/>)}
				</div>

			</div>
		)
	}






export default Users










