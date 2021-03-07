import {getAuthData} from "./authReducer";
import {getProfile} from "./profileReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


const initialState = {
	initialized: false
}

const appReducer = (state=initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}

		default:
			return state
	}

	return state
}


//                                       ACTION CREATORS
const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})


//                                           THUNKS
export const initializeApp = () => (dispatch) => {
	let promise = dispatch(getAuthData())
	Promise.all([promise]).then(()=> {
		dispatch(initializedSuccess())
	})
}


export default appReducer