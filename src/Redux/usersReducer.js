const TOGGLE_FOLLOW = 'SEND-TOGGLE_FOLLOW'
const ADD_USERS = 'ADD_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

let initialState = {
	usersData: [],
	currentPage: 1,
	count: 5,
	totalUsersCount: 0,
	isFetching: false,
}


const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FOLLOW:
			return {
				...state,
				usersData: state.usersData.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: !u.followed}
					}
					return u
				})
			}

		case ADD_USERS:
			return {
				...state,
				usersData: [...action.users]
			}

		case SET_CURRENT_PAGE:
			return{
				...state,
				currentPage: action.currentPage
			}

		case SET_TOTAL_USERS_COUNT:
			return{
				...state,
				totalUsersCount: action.totalUsersCount
			}

		case TOGGLE_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
	}


		default:
			return state;
	}

	return state
}

export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, userId})
export const addUsers = (users) => ({type: ADD_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})




export default usersReducer