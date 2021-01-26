const TOGGLE_FOLLOW = 'SEND-TOGGLE_FOLLOW'
const ADD_USERS = 'ADD_USERS'


let initialState = {
	usersData: [
		// {
		// 	id: 1, name: 'Dmitry K.', status: 'yo', followed: false,
		// 	avaUrl: 'https://mens-education.ru/wp-content/uploads/2020/03/DAlGPX00_pI.jpg',
		// 	location: {country: 'Belarus', city: 'Minsk', }
		// 	},
		// {
		// 	id: 2, name: 'Dmitry K.', status: 'yo', followed: false,
		// 	avaUrl: 'https://mens-education.ru/wp-content/uploads/2020/03/DAlGPX00_pI.jpg',
		// 	location: {country: 'Belarus', city: 'Minsk', }
		// 	},
		// {
		// 	id: 3, name: 'Dmitry K.', status: 'yo', followed: false,
		// 	avaUrl: 'https://mens-education.ru/wp-content/uploads/2020/03/DAlGPX00_pI.jpg',
		// 	location: {country: 'Belarus', city: 'Minsk', }
		// 	},
		// {
		// 	id: 4, name: 'Dmitry K.', status: 'yo', followed: false,
		// 	avaUrl: 'https://mens-education.ru/wp-content/uploads/2020/03/DAlGPX00_pI.jpg',
		// 	location: {country: 'Belarus', city: 'Minsk', }
		// 	},
		// {
		// 	id: 5, name: 'Dmitry K.', status: 'yo', followed: false,
		// 	avaUrl: 'https://mens-education.ru/wp-content/uploads/2020/03/DAlGPX00_pI.jpg',
		// 	location: {country: 'Belarus', city: 'Minsk', }
		// }
	]
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
				usersData: [...state.usersData, ...action.users]
			}

		default:
			return state;
	}

	return state
}

export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId})
export const addUsersAC = (users) =>
	({type: ADD_USERS, users})


export default usersReducer