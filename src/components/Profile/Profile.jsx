import {Redirect, withRouter} from "react-router-dom";
import MyProfileContainer from "./MyProfile/MyProfileContainer";
import React, {useEffect, useState} from "react";
import UsersProfileContainer from "./UsersProfile/UsersProfileContainer";

const Profile = (props) => {
	let userId = +props.match.params.userId

	let [ownId, saveOwnId] = useState(null)
	useEffect(()=> {
		saveOwnId(props.ownId)
	}, [userId])

	if (props.isAuth){
		if (props.ownId === userId){
			return <MyProfileContainer/>
		}else{
			return <UsersProfileContainer/>
		}
	}else{
		if (!ownId){
			return <UsersProfileContainer/>
		}
			return <Redirect to={'/login'}/>
		}
}


export default withRouter(Profile)






