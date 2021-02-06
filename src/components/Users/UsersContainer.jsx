import Users from "./Users";
import {connect} from "react-redux";
import {
	addUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleFetching,
	toggleFollow
} from "../../Redux/usersReducer";
import * as axios from "axios";
import React from "react";




class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.usersData.length = 0
		this.props.toggleFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`)
			.then(response => {
				this.props.toggleFetching(false)
				this.props.addUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPrevPageChanged = (pageNumber) => {
		if (pageNumber > 1) {
			this.props.setCurrentPage(--pageNumber)
			this.props.usersData.length = 0
			this.props.toggleFetching(true)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`)
				.then(response => {
					this.props.toggleFetching(false)
					this.props.addUsers(response.data.items)
				})
		}
	}

	onNextPageChanged = (pageNumber, pageCount) => {
		if (pageNumber <= pageCount) {
			this.props.setCurrentPage(++pageNumber)
			this.props.usersData.length = 0
			this.props.toggleFetching(true)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`)
				.then(response => {
					this.props.toggleFetching(false)
					this.props.addUsers(response.data.items)
				})
		}
	}


	render() {
		return <>
			<Users
				totalUsersCount={this.props.totalUsersCount}
				currentPage={this.props.currentPage}
				toggleFollow={this.props.toggleFollow}
				onPrevPageChanged={this.onPrevPageChanged}
				onNextPageChanged={this.onNextPageChanged}
				count={this.props.count}
				usersData={this.props.usersData}
				isFetching={this.props.isFetching}
			/>
		</>
	}

}



let mapStateToProps = (state) => {
	return {
		usersData: state.usersReducer.usersData,
		currentPage: state.usersReducer.currentPage,
		count: state.usersReducer.count,
		totalUsersCount: state.usersReducer.totalUsersCount,
		isFetching: state.usersReducer.isFetching
	}
}





export default connect(mapStateToProps, {
	addUsers, toggleFollow, setCurrentPage, setTotalUsersCount, toggleFetching,
})(UsersContainer)
