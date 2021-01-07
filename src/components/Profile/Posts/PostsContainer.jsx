import React from "react";
import profileReducer, {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profileReducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
	let state = props.store.getState().profileReducer

	const onAddPost = ()=> {
		props.store.dispatch(addPostActionCreator())
	}

	const onPostChange = (text)=> {
		props.store.dispatch(updatePostTextActionCreator(text))
	}

	return <Posts newPostText={state.newPostText} postsData={state.postsData} onPostChange={onPostChange} onAddPost={onAddPost}/>
}

export default PostsContainer





