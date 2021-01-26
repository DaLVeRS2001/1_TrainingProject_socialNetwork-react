import Users from "./Users";
import {connect} from "react-redux";
import {addUsersAC, toggleFollowAC} from "../../Redux/usersReducer";


let mapStateToProps = (state) => {
	return {
		usersData: state.usersReducer.usersData
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addUsers(users){
			dispatch(addUsersAC(users))
		},
		toggleFollow(userId){
			dispatch(toggleFollowAC(userId))
		}
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Users)
