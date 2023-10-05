"use client";
import TitleBanner from "@/components/TitleBanner";
import { ContactForm, ContactSuccess, SideText } from "@/pageParts/contact-us";
import { useState } from "react";

const ContactUs = () => {
	const [done, setDone] = useState(false);
	return (
		<main className="">
			<TitleBanner
				title="Contact Us"
				navTo={{ label: "Contact Us", link: "/contact-us" }}
			/>
			{!done ? (
				<div className="grid grid-cols-2 gap-[206px] px-[104px] pb-10 pt-[70px]  ">
					<SideText />
					<ContactForm setDone={(val: boolean) => setDone(val)} />
				</div>
			) : (
				<div className="py-20 px-[282px] ">
					<ContactSuccess />
				</div>
			)}
		</main>
	);
};

export default ContactUs;
