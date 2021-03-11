import React, {useEffect} from "react";
import UsersProfile from "./UsersProfile";
import {connect} from "react-redux";
import {getProfile, getStatus} from "../../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


const UsersProfileContainer = (props) => {
	let userId = props.match.params.userId

	useEffect(() => {
		if(userId) {
			props.getProfile(userId)
			props.getStatus(userId)
		}
	}, [userId])

	return <div>
		<UsersProfile  {...props} profile={props.profile}/>
	</div>
}



let mapStateToProps = (state)=> {
	return {
		profile: state.profileReducer.profile,
		status: state.profileReducer.status,
		ownId: state.authReducer.id,
		isFetching: state.profileReducer.isFetching
	}
}


 export default compose(
	withRouter,
	connect(mapStateToProps, {getProfile, getStatus})
)(UsersProfileContainer)




