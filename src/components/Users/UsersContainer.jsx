import Users from "./Users";
import {connect} from "react-redux";
import {
	followUser, unfollowUser,
	setNextUsers, setPrevUsers,
	setUsers
} from "../../Redux/usersReducer";
import React from "react";
import withAuthRedirect from "../../hocs/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.setUsers(this.props.currentPage, this.props.count)
	}

	onPrevPageChanged = (pageNumber) => {
		this.props.setPrevUsers(pageNumber, this.props.count)
	}

	onNextPageChanged = (pageNumber, pageCount) => {
		this.props.setNextUsers(pageNumber, pageCount, this.props.count)
	}

	 onUserFollow = (id) => {
		this.props.followUser(id)
	}

	 onUserUnfollow = (id) => {
		 this.props.unfollowUser(id)
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
				followingInProgress={this.props.followingInProgress}
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
		isFetching: state.usersReducer.isFetching,
		followingInProgress: state.usersReducer.followingInProgress
	}
}





export default compose(
	connect(mapStateToProps, {followUser, setUsers, setPrevUsers, setNextUsers, unfollowUser}),
	withAuthRedirect
)(UsersContainer)
