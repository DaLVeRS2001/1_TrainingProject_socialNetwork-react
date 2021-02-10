import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {clearProfile, setUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import profileApi from "../../api/profileApi";
import {toggleFetching} from "../../Redux/usersReducer";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		const setUserProfile = (profile) => {
			this.props.setUserProfile(profile)
		}

		if (!userId) {
			if (this.props.profile != null){
				this.props.clearProfile()
			}
			profileApi.getOwnId().then(provideOwnId)

			function provideOwnId(ownId) {
				profileApi.setUserProfile(ownId)
					.then(response => {
						setUserProfile(response)
					})
			}
		}else{
			if (this.props.profile != null){
				this.props.clearProfile()
			}
			this.props.toggleFetching(true)
			profileApi.setUserProfile(userId)
				.then(response => {
					this.props.setUserProfile(response)
					this.props.toggleFetching(false)
				})
		}
	}


	render() {
		return <Profile {...this.props} profile={this.props.profile}/>
	}
}

let mapStateToProps = (state)=> {
	return {
		profile: state.profileReducer.profile,
		isFetching: state.usersReducer.isFetching
	}
}

let withUrlDataContainerComp = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
	setUserProfile, toggleFetching, clearProfile
})(withUrlDataContainerComp)