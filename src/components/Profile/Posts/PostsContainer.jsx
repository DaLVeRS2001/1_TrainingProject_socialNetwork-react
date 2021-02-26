import React from "react";
import {addPost} from "../../../Redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";



let mapStateToProps = state => {
	return {
		profilePage: state.profileReducer
	}
}


const PostsContainer = connect(mapStateToProps, {
	addPost
})(Posts)

export default PostsContainer