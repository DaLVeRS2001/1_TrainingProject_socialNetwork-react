import Users from "./Users";
import {connect} from "react-redux";
import {addUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleFollowAC} from "../../Redux/usersReducer";


let mapStateToProps = (state) => {
	return {
		usersData: state.usersReducer.usersData,
		currentPage: state.usersReducer.currentPage,
		count: state.usersReducer.count,
		totalUsersCount: state.usersReducer.totalUsersCount
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addUsers(users){
			dispatch(addUsersAC(users))
		},
		toggleFollow(userId){
			dispatch(toggleFollowAC(userId))
		},
		setCurrentPage(currentPage){
			dispatch(setCurrentPageAC(currentPage))
		},
		setTotalUsersCount(usersCount){
			dispatch(setTotalUsersCountAC(usersCount))
		}
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Users)
