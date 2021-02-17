import usersApi from "../api/usersApi";

const TOGGLE_FOLLOW = 'SEND-TOGGLE_FOLLOW',
	ADD_USERS = 'ADD_USERS',
	SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
	SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
	TOGGLE_FETCHING = 'TOGGLE_FETCHING',
	TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS',
	CLEAR_USERS_DATA = 'CLEAR_USERS_DATA';


let initialState = {
	usersData: [],
	currentPage: 1,
	count: 5,
	totalUsersCount: 0,
	isFetching: false,
	followingInProgress: []
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
		case TOGGLE_FOLLOWING_PROGRESS:
			return{
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id=> id != action.userId)
			}
		case CLEAR_USERS_DATA:
			return{
				...state,
				usersData: []
			}


		default:
			return state;
	}

	return state
}


//                                       ACTION CREATORS
export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, userId})
export const addUsers = (users) => ({type: ADD_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId})
export const clearUsersData = () => ({type: CLEAR_USERS_DATA})


//                                           THUNKS
export const setUsers = (currentPage, count) => (dispatch) => {
	dispatch(clearUsersData())
	dispatch(toggleFetching(true))

	usersApi.getUsers(currentPage, count)
		.then(response => {
			dispatch(toggleFetching(false))
			dispatch(addUsers(response.items))
			dispatch(setTotalUsersCount(response.totalCount))
		})
}

export const setPrevUsers = (pageNumber, count) => (dispatch) => {
	if (pageNumber > 1) {
		dispatch(clearUsersData())
		dispatch(setCurrentPage(--pageNumber))
		dispatch(toggleFetching(true))

		usersApi.getPrevUsers(pageNumber, count)
			.then(response => {
				dispatch(toggleFetching(false))
				dispatch(addUsers(response.items))
			})
	}
}

export  const setNextUsers = (pageNumber, pageCount, count) => (dispatch) => {
	// usersData.length = 0
	if (pageNumber <= pageCount) {
		dispatch(clearUsersData())
		dispatch(setCurrentPage(++pageNumber))
		dispatch(toggleFetching(true))

		usersApi.getNextUsers(pageNumber, count)
			.then(response => {
				dispatch(toggleFetching(false))
				dispatch(addUsers(response.items))
			})
	}
}

export  const followUser = (id) => (dispatch) => {
	dispatch(toggleFollowingProgress(true, id))
	usersApi.followUser(id)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(toggleFollow(id))
			}
			dispatch(toggleFollowingProgress(false, id))
		})
}

export  const unfollowUser = (id) => (dispatch) => {
	dispatch(toggleFollowingProgress(true, id))
	usersApi.unfollowUser(id)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(toggleFollow(id))
			}
			dispatch(toggleFollowingProgress(false, id))
		})
}





export default usersReducer