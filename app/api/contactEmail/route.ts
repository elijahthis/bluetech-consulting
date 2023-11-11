import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";
import path from "path";
import hbs from "nodemailer-express-handlebars";
import { create } from "express-handlebars";

export async function POST(req: NextRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		try {
			const body = await req.json();
			console.log("body", body);

			// Create a nodemailer transporter using your email service provider's SMTP server
			const transporter = nodemailer.createTransport({
				// service: "Gmail", // You can replace with your email service provider (e.g., 'SendGrid')
				host: "mail.privateemail.com",
				port: 465,
				auth: {
					user: "hello@elijahthis.com",
					pass: "Espionage098!",
				},
			});

			// point to the template folder
			const handlebarsOptions = {
				viewEngine: {
					extName: ".hbs",
					partialsDir: path.resolve("./app/api/views/"),
					defaultLayout: false,
				},
				viewPath: path.resolve("./app/api/views/"),
				extName: ".hbs",
			};

			transporter.use("compile", hbs(handlebarsOptions as any));

			// Define the email message
			const mailOptions = {
				from: "hello@elijahthis.com",
				to: body?.to,
				subject: body?.subject,
				template: "contactEmailCustomer",
				context: {
					name: "Elijah",
					company: "my company",
				},
			};

			// Send the email
			await transporter.sendMail(mailOptions);

			return NextResponse.json({ message: "Email sent successfully" });
		} catch (error) {
			console.log("error", error);
			return NextResponse.json({
				error: "An error occurred while sending the email.",
			});
		}
	} else {
		res.status(405).end();
		return NextResponse.json({ error: "Method not allowed" });
	}
}
