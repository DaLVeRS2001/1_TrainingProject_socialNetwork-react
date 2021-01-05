const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'


const profileReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST:
			if (state.newPostText === '') {
				return null
			} else {
				let id = state.postsData.length + 1
				let newPost = {
					id: id,
					src: 'https://cdn.shopify.com/s/files/1/1804/6139/products/The_Purge-Balck_Base_Mask_1200x1200.jpg?v=1567392045',
					message: state.newPostText
				}
				state.postsData.push(newPost)
				state.newPostText = ''
			}

			return state;

		case UPDATE_POST_TEXT:
			state.newPostText = action.newText

			return state;

		default:
			return state;
	}

	return state
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostTextActionCreator = (text) =>
	({type: UPDATE_POST_TEXT, newText: text})


export default profileReducer