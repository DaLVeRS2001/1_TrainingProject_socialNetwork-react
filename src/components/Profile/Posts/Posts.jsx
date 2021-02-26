import React from "react";
import s from "./Posts.module.scss";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div><Field component={'textarea'} name={'textarea'} placeholder={'Enter post text'}/></div>
			<div><button>Add Post</button></div>
		</form>
	)
}

const PostReduxForm = reduxForm({
	form: 'PostForm'
})(PostForm)



const Posts = (props) => {
	const pp = props.profilePage

	const addPost = (values)=> {
	 	props.addPost(values.textarea)
	}

	return (
		<div className={s.postsBlock}>
			<div className={s.newPost}>
				<h3>My posts</h3>
				<PostReduxForm onSubmit={addPost}/>
			</div>

			<div className={s.posts}>
				{pp.postsData.map((post)=>
					<Post
						id={post.id}
						message={post.message}
						src={post.src}
						key={post.id}
					/>
				)}
			</div>

		</div>
	)
}


export default Posts






