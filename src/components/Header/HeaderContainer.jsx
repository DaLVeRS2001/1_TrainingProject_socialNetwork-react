import React from "react";
import Header from "./Header";
import * as axios from 'axios'
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/authReducer";
import authApi from "../../api/authApi";

class HeaderContainer extends React.Component{
	componentDidMount() {
		authApi.setAuthUserData()
			.then(response=> {
				if (response.resultCode === 0){
					let {id, email, login} = response.data
					this.props.setAuthUserData(id, email, login)
				}
			})
	}

	render() {
		return <Header {...this.props}/>
	}
}


const mapStateToProps = (state) => {
	return {
		login: state.authReducer.login,
		isAuth: state.authReducer.isAuth
	}
}

export default connect(mapStateToProps, {
	setAuthUserData
})(HeaderContainer)











