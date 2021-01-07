import React from "react";
import s from "./Posts.module.scss";
import Post from "./Post/Post";

const Posts = (props) => {
	 const onAddPost = ()=> {
	 	props.onAddPost()
	}

	const onPostChange = (e)=> {
		let text = e.target.value
		props.onPostChange(text)
	}



	return (
		<div className={s.postsBlock}>
			<div className={s.newPost}>
				<h3>My posts</h3>
				<textarea onChange={onPostChange} value={props.newPostText} /><br/>
				<button onClick={onAddPost}>Add Post</button>
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






