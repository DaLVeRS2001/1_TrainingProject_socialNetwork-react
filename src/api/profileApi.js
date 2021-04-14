import instance from "./instanceApiSetting/instanceApi";

const profileApi = {
	getUserProfile(id){
		return instance.get(`profile/${id}`)
			.then(response=> response.data)
	},
	getStatus(id){
		return instance.get(`profile/status/${id}`)
			.then(response=> response.data)
	},
	updateStatus(status){
		return instance.put(`profile/status`, {status})
			.then(response=> response.data)
	},
	updatePhoto(photo){
		return instance.put(`profile/photo`, photo)
			.then(response=> response.data)
	},
	updateSetting(setting){
		return instance.put('profile', setting)
			.then(response=> response.data)
	}
}

export  default profileApi