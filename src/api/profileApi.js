import instance from "./instanceApiSetting/instanceApi";

const profileApi = {
	getUserProfile(id){
		return instance.get(`profile/${id}`)
			.then(response=> response.data)
	},
	getOwnId(){
		return instance.get(`auth/me`)
			.then(response=> response.data.data.id)
	}
}

export  default profileApi