import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import MyProfile from "./MyProfile";

const MyProfileContainer = (props) => {
	let userId = props.ownId

	useEffect(() => {
		if(userId) {
			props.getProfile(userId)
			props.getStatus(userId)
		}
	}, [userId])

	return <MyProfile  {...props} profile={props.profile}/>
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
	connect(mapStateToProps, {getProfile, getStatus, updateStatus})
)(MyProfileContainer)




