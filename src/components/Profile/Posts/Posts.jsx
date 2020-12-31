import React from "react";
import s from "./Posts.module.scss";
import Post from "./Post/Post";

const Posts = (props) => {
	console.log(props.postsData)
	return (
		<div className={s.postsBlock}>
			<div className={s.newPost}>
				<h3>My posts</h3>
				<textarea cols="30" rows="5">#</textarea><br/>
				<button>Add Post</button>
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






