import authApi from "../api/authApi";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'


const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true
			}

		default:
			return state
	}

	return state
}


//                                       ACTION CREATORS
export const setAuthUserData = (id, email, login) => ({type: 'SET_AUTH_USER_DATA', data: {id, email, login}})


//                                           THUNKS
export const setAuthData = () => (dispatch) => {
	authApi.getAuthUserData()
		.then(response=> {
			if (response.resultCode === 0){
				let {id, email, login} = response.data
				dispatch(setAuthUserData(id, email, login))
			}
		})
}

export default authReducer