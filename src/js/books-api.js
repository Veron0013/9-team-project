import axios from "axios";
import refs from '/js/refs';

export async function getApiData(url) {
	try {
		const response = await axios.get(url);
		return response;
	} catch (error) {
		const statusCode = error.response?.status ?? null;

		throw new ErrorService({
			message: `API error: ${error.message}`,
			name: refs.API_ERROR,
			statusCode,
			error
		});
	}
}

export class ErrorService extends Error {
	constructor({ message, secondaryMessage = "", name = "CustomError", error = null, statusCode = null }) {
		super(message);
		this.name = name;
		this.secondaryMessage = secondaryMessage;
		this.statusCode = statusCode;
		this.originalError = error;
	}
}