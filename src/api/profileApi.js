import instance from "./instanceApiSetting/instanceApi";

const profileApi = {
	getUserProfile(id){
		return instance.get(`profile/${id}`)
			.then(response=> response.data)
	},
	getOwnId(){
		return instance.get(`auth/me`)
			.then(response=> response.data.data.id)
	},
	getStatus(id){
		return instance.get(`profile/status/${id}`)
			.then(response=> response.data)
	},
	updateStatus(status){
		return instance.put(`profile/status`, {status})
	}
}

export  default profileApi