import axios from "axios"

const Api = axios.create({
	baseURL : "https://api.isesac.org/api/v1/"
})

Api.interceptors.request.use(request => {
	request.url += "&key=123";
	return request;
});

export {
	Api
};