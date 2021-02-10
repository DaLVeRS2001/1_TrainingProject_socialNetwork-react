import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,
	headers: {'API-KEY': '21c5f7a8-45fb-489a-a4be-edcd3ba5e76d'},
	baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export  default instance