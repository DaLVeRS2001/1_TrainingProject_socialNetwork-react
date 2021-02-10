import instance from "./instanceApiSetting/instanceApi";

const authApi = {
	setAuthUserData(){
		return instance.get('auth/me')
			.then(response=> response.data)
	}
}

export default authApi