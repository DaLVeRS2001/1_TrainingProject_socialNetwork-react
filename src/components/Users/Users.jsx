import React from "react";
import s from './Users.module.scss'
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`)
			.then(response => {
				this.props.addUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPrevPageChanged = (pageNumber) => {
		if (pageNumber > 1){
			this.props.setCurrentPage(--pageNumber)
			console.log(pageNumber)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`)
				.then(response => {
					this.props.addUsers(response.data.items)
				})
		}

	}

	onNextPageChanged = (pageNumber, pageCount) => {
		if (pageNumber <= pageCount){
			this.props.setCurrentPage(++pageNumber)
			console.log(pageNumber)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`)
				.then(response => {
					this.props.addUsers(response.data.items)
				})
		}
	}

	render = () => {
		let pageCount = Math.ceil(this.props.totalUsersCount / this.props.count)

		return (
			<div className={s.usersBlock}>
				Users
				<div className={s.pageSwitches}>
					<button onClick={()=> this.onPrevPageChanged(this.props.currentPage)} className={s.prevPageBtn}>Prev Page</button>
					<button onClick={()=> this.onNextPageChanged(this.props.currentPage, pageCount)} className={s.nextPageBtn}>Next Page</button>
				</div>

				<div className={s.users}>
					{this.props.usersData.map(u => <User userData={u} toggleFollow={this.props.toggleFollow}/>)}
				</div>

			</div>
		)
	}

}





// const Users = (props) => {
// if (props.usersData.length === 0){
// 	axios.get('https://social-network.samuraijs.com/api/1.0/users')
// 		.then(response => {
// 			props.addUsers(response.data.items)
// 		})
// }
//
//
// 	return (
// 		<div className={s.usersBlock}>
// 			Users
// 			<div className={s.users}>
// 				{props.usersData.map(u => <User userData={u} toggleFollow={props.toggleFollow}/>)}
// 			</div>
// 		</div>
// 	)
// }



export default Users










