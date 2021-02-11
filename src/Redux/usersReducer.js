const TOGGLE_FOLLOW = 'SEND-TOGGLE_FOLLOW',
	ADD_USERS = 'ADD_USERS',
	SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
	SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
	TOGGLE_FETCHING = 'TOGGLE_FETCHING',
	TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';



let initialState = {
	usersData: [],
	currentPage: 1,
	count: 5,
	totalUsersCount: 0,
	isFetching: false,
	followingInProgress: []
}

debugger
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
		case TOGGLE_FOLLOWING_PROGRESS:
			return{
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id=> id != action.userId)
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
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId})




export default usersReducer