import instance from "./instanceApiSetting/instanceApi";

const authApi = {
	getAuthUserData(){
		return instance.get('auth/me')
			.then(response=> response.data)
	},
	submitLoginForm(formData){
		return instance.post('auth/login', formData)
			.then((response)=> response.data)
	},
	sendLogoutRequest(){
		return instance.delete('auth/login')
			.then((response)=> response.data)
	}
}

export default authApi