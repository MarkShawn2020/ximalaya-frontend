import axios from 'axios'

export const backendAPI = axios.create({
	baseURL: 'http://127.0.0.1:2365',
})

