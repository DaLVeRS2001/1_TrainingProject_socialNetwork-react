import authApi from "../api/authApi";
import {reset} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',
	TOGGLE_IS_AUTH = 'TOGGLE_IS_AUTH'


const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: true
}

const authReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true
			}
		case TOGGLE_IS_AUTH:
			return {
				...state,
				isAuth: action.isAuth
			}

		default:
			return state
	}

	return state
}


//                                       ACTION CREATORS
export const setAuthUserData = (id, email, login) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}})
export const toggleIsAuth = (isAuth) => ({type: TOGGLE_IS_AUTH, isAuth})
//                                           THUNKS
export const setAuthData = () => (dispatch) => {
	authApi.getAuthUserData()
		.then(response=> {
			console.log(response)
			if (response.resultCode === 0){
				let {id, email, login} = response.data
				dispatch(setAuthUserData(id, email, login))
			}
		})
}

export const signIn = (formData) => (dispatch) => {
	authApi.submitLoginForm(formData)
		.then((response)=> {
			dispatch(reset('Login'))
			if (response.resultCode === 0){
				dispatch(toggleIsAuth(true))
			}
		})
}
export const signOut = () => (dispatch) => {
	authApi.sendLogoutRequest()
		.then((response)=> {
			if (response.resultCode === 0){
				dispatch(toggleIsAuth(false))
			}
		})
}


export default authReducer