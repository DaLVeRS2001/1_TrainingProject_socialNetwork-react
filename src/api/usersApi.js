import instance from "./instanceApiSetting/instanceApi";

const usersApi = {
	getUsers(currentPage, count) {
		return instance.get(`users?page=${currentPage}&count=${count}`)
			.then(response => response.data)
	},

	getNextUsers(pageNumber, count) {
		return instance.get(`users?page=${pageNumber}&count=${count}`)
			.then(response => response.data)
	},

	getPrevUsers(pageNumber, count) {
		return instance.get(`users?page=${pageNumber}&count=${count}`)
			.then(response => response.data)
	},

	followUser(id){
		return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
			.then(response=> response.data)
	},

	unfollowUser(id){
		return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
			.then(response=> response.data)
	}
}

export  default usersApi