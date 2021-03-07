import profileApi from "../api/profileApi";
import {reset} from "redux-form";

const ADD_POST = 'ADD-POST',
	SET_USER_PROFILE = 'SET_USER_PROFILE',
	CLEAR_PROFILE = 'CLEAR_PROFILE',
	TOGGLE_FETCHING = 'TOGGLE_FETCHING',
	SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
	postsData: [
		{
			id: 1,
			src: 'https://cdn.shopify.com/s/files/1/1804/6139/products/The_Purge-Balck_Base_Mask_1200x1200.jpg?v=1567392045',
			message: 'Hi'
		},
		{
			id: 2,
			src: 'https://avatars.mds.yandex.net/get-znatoki/1649112/2a0000016fce29d420e9c80c6c56d63c6957/w1200',
			message: 'bye'
		},
		{
			id: 3,
			src: 'https://steamuserimages-a.akamaihd.net/ugc/782989521799828488/99CC5CFF94186C28A21C7E81D145E9C6550DCC14/?imw=512&amp;imh=499&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
			message: 'how ar u?'
		}
	],

	profile: null,
	status: 'Your status',
	isFetching: false,

}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			if (action.newPostText) {
				let id = state.postsData.length + 1
				let newPost = {
					id: id,
					src: 'https://cdn.shopify.com/s/files/1/1804/6139/products/The_Purge-Balck_Base_Mask_1200x1200.jpg?v=1567392045',
					message: action.newPostText
				}

				return {
					...state,
					postsData: [...state.postsData, newPost],
				}
			}else{
				return state
			}

		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			}
		case CLEAR_PROFILE:
			return {
				...state,
				profile: null,
				userId: null
			}
		case TOGGLE_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
		case SET_USER_STATUS:
			return{
				...state,
				status: action.status
			}

		default:
			return state;
	}

	return state
}


//                                       ACTION CREATORS
const addUserPost = (newPostText) => ({type: ADD_POST, newPostText}),
	setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile}),
	clearProfile = () => ({type: CLEAR_PROFILE}),
	toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching}),
	setUserStatus = (status) => ({type: SET_USER_STATUS, status})


//                                           THUNKS
export const addPost = (newPostText) => (dispatch) => {
		dispatch(reset('PostForm'))
		dispatch(addUserPost(newPostText))
	},

	getProfile = (userId) => (dispatch) => {
			dispatch(clearProfile())
			dispatch(toggleFetching(true))
			return profileApi.getUserProfile(userId)
				.then(profile => {
					dispatch(setUserProfile(profile))
					dispatch(toggleFetching(false))
				})
	},

	getStatus = (userId) => (dispatch) => {
			profileApi.getStatus(userId)
				.then((response) => {
					dispatch(setUserStatus(response))
				})
	},

	updateStatus = (status) => (dispatch) => {
		profileApi.updateStatus(status)
			.then((response) => {
				if (response.data.resultCode === 0) {
					dispatch(setUserStatus(status))
				}
			})
	}



export default profileReducer