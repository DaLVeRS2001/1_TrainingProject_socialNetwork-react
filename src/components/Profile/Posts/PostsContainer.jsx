import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";



let mapStateToProps = state => {
	return {
		profilePage: state.profileReducer
	}
}

	let mapDispatchToProps = dispatch => {
		return {
			onPostChange(text) {
				dispatch(updatePostTextActionCreator(text))
			},
			onAddPost() {
				dispatch(addPostActionCreator())
			}
		}
	}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer