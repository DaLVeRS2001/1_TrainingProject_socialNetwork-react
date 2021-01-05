import React from "react";
import s from "./Posts.module.scss";
import Post from "./Post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profileReducer";

const Posts = (props) => {
	 const postElemVal = React.createRef()



	 const addPost = ()=> {
		 props.dispatch(addPostActionCreator())
	}

	const onPostChange = ()=> {
		let text = postElemVal.current.value
		props.dispatch(updatePostTextActionCreator(text))
	}



	return (
		<div className={s.postsBlock}>
			<div className={s.newPost}>
				<h3>My posts</h3>
				<textarea onChange={onPostChange} value={props.newPostText}  ref={postElemVal} cols="30" rows="5"/><br/>
				<button onClick={addPost}>Add Post</button>
			</div>

			<div className={s.posts}>
				{props.postsData.map((post)=>
					<Post
						id={post.id}
						message={post.message}
						src={post.src}
					/>
				)}
			</div>

		</div>
	)
}


export default Posts






