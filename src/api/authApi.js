import instance from "./instanceApiSetting/instanceApi";

const authApi = {
	getAuthUserData(){
		return instance.get('auth/me')
			.then(response=> response.data)
	}
}

export default authApi