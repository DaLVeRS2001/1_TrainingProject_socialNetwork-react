import React from "react";
import s from "./Posts.module.scss";
import Post from "./Post/Post";

const Posts = () => {
	return (
		<div className={s.postsBlock}>

			<div className={s.newPost}>
				<h3>My posts</h3>
				<textarea name="" id="" cols="30" rows="5"></textarea><br/>
				<button>Add Post</button>
			</div>

			<div className={s.posts}>
				<Post
					message='Hi'
					scr='https://cdn.shopify.com/s/files/1/1804/6139/products/The_Purge-Balck_Base_Mask_1200x1200.jpg?v=1567392045'
				/>
				<Post
					message='bye'
					scr='https://avatars.mds.yandex.net/get-znatoki/1649112/2a0000016fce29d420e9c80c6c56d63c6957/w1200'
				/>
				<Post
					message='how ar u?'
					scr='https://steamuserimages-a.akamaihd.net/ugc/782989521799828488/99CC5CFF94186C28A21C7E81D145E9C6550DCC14/?imw=512&amp;imh=499&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'
				/>
			</div>

		</div>
	)
}


export default Posts






