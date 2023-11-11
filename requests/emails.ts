import axios, { AxiosResponse, AxiosError } from "axios";

export const sendContactEmail = async () => {
	try {
		const response: AxiosResponse | AxiosError = await axios.post(
			"/api/contactEmail",
			{
				to: "hello@elijahthis.com",
				subject: "Hello from Next.js",
				text: "This is a test email from a Next.js API route.",
			}
		);

		if ("data" in response) {
			console.log("Email sent successfully");
		} else {
			console.error("Error:", response.message);
		}
	} catch (error) {
		console.error("Error:", error);
	}
};
