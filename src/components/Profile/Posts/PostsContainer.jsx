import React from "react";
import {updatePostText, addPost} from "../../../Redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";



let mapStateToProps = state => {
	return {
		profilePage: state.profileReducer
	}
}


const PostsContainer = connect(mapStateToProps, {
	updatePostText,
	addPost
})(Posts)

export default PostsContainer