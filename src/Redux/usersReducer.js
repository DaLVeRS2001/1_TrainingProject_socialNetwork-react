const TOGGLE_FOLLOW = 'SEND-TOGGLE_FOLLOW'
const ADD_USERS = 'ADD_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialState = {
	usersData: [
		// {
		// 	id: 1, name: 'Dmitry K.', status: 'yo', followed: false,
		// 	avaUrl: 'https://mens-education.ru/wp-content/uploads/2020/03/DAlGPX00_pI.jpg',
		// 	location: {country: 'Belarus', city: 'Minsk', }
		// 	},
	],
	currentPage: 1,
	count: 5,
	totalUsersCount: 0
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

		default:
			return state;
	}

	return state
}

export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId})
export const addUsersAC = (users) => ({type: ADD_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})




export default usersReducer