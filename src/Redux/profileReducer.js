const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

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
	newPostText: ''
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			if (state.newPostText === '') {
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