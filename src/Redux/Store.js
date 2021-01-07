import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
	_state: {
		profilePage: {
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
		},
		dialogsPage: {
			dialogsData: [
				{id: 1, userName: 'Alex'},
				{id: 2, userName: 'Sam'},
				{id: 3, userName: 'Ilia'},
				{id: 4, userName: 'Victor'},
				{id: 5, userName: 'Vlad'},
			],
			messagesData: [
				{id: 1, userMessage: 'Hi'},
				{id: 2, userMessage: 'how are u'},
				{id: 3, userMessage: 'yo'},
				{id: 4, userMessage: 'good morning'},
				{id: 5, userMessage: "what's up"}
			],
			newMessageText: ''
		},

	},
	getState() {
		return this._state
	},
	_callSubscriber() {},
	subscribe(observer) {
		this._callSubscriber = observer
	},
	dispatch(action){
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

		this._callSubscriber(this._state)

	}
}









export default store