import axios from "axios";

export async function getApiData(url) {
	return await axios.get(url)
		.then(data => data)
		.catch(error => error.message);
};
