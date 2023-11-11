import axios, { AxiosResponse, AxiosError } from "axios";

export const sendContactEmail = async (formData: {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	subject?: string;
	comment: string;
}) => {
	try {
		const response: AxiosResponse | AxiosError = await axios.post(
			"/api/contactEmail",
			formData
		);

		if ("data" in response) {
			console.log("Email sent successfully");
		} else {
			console.error("Error:", response.message);
		}

		return response;
	} catch (error) {
		console.error("Error:", error);
	}
};
