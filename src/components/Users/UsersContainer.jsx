import Users from "./Users";
import {connect} from "react-redux";
import {
	addUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleFetching,
	toggleFollow
} from "../../Redux/usersReducer";
import React from "react";
import usersApi from "../../api/usersApi";


class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.usersData.length = 0
		this.props.toggleFetching(true)

		usersApi.setUsers(this.props.currentPage, this.props.count)
			.then(response => {
				this.props.toggleFetching(false)
				this.props.addUsers(response.items)
				this.props.setTotalUsersCount(response.totalCount)
			})
	}

	onPrevPageChanged = (pageNumber) => {
		if (pageNumber > 1) {
			this.props.setCurrentPage(--pageNumber)
			this.props.usersData.length = 0
			this.props.toggleFetching(true)

			usersApi.setPrevUsers(pageNumber, this.props.count)
				.then(response => {
					this.props.toggleFetching(false)
					this.props.addUsers(response.items)
				})
		}
	}

	onNextPageChanged = (pageNumber, pageCount) => {
		if (pageNumber <= pageCount) {
			this.props.setCurrentPage(++pageNumber)
			this.props.usersData.length = 0
			this.props.toggleFetching(true)

			usersApi.setNextUsers(pageNumber, this.props.count)
				.then(response => {
					this.props.toggleFetching(false)
					this.props.addUsers(response.items)
				})
		}
	}

	 onUserFollow = (id) => {
		usersApi.followUser(id)
			.then(response => {
				if (response.resultCode === 0) {
					this.props.toggleFollow(id)
				}
			})
	}

	 onUserUnfollow = (id) => {
		usersApi.unfollowUser(id)
			.then(response => {
				if (response.resultCode === 0) {
					this.props.toggleFollow(id)
				}
			})
	}


	render() {
		return <>
			<Users
				onUserFollow={this.onUserFollow}
				onUserUnfollow={this.onUserUnfollow}
				totalUsersCount={this.props.totalUsersCount}
				currentPage={this.props.currentPage}
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
