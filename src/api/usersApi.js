import instance from "./instanceApiSetting/instanceApi";

const usersApi = {
	setUsers(currentPage, count) {
		return instance.get(`users?page=${currentPage}&count=${count}`)
			.then(response => response.data)
	},

	setNextUsers(pageNumber, count) {
		return instance.get(`users?page=${pageNumber}&count=${count}`)
			.then(response => response.data)
	},

	setPrevUsers(pageNumber, count) {
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