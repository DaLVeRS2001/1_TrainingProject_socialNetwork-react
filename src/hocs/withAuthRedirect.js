import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const withAuthRedirect = (Component) => {
	class AuthRedirectComp extends React.Component{
		render() {
			if(!this.props.isAuth) return <Redirect to='/login'/>
			return <Component {...this.props}/>
		}
	}

	let mapStateToProps = (state) => {
		return{
			isAuth: state.authReducer.isAuth
		}
	}

	let ConnectedAuthRedirectComp = connect(mapStateToProps)(AuthRedirectComp)

	return ConnectedAuthRedirectComp
}

export default withAuthRedirect