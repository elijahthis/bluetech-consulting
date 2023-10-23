"use client";
import Button from "@/components/Button";
import InputComponent from "@/components/InputComponent";

export const ContactForm = ({
	setDone,
}: {
	setDone: (val: boolean) => void;
}) => {
	return (
		<form
			className="flex flex-col gap-4 items-stretch"
			action=""
			onSubmit={(e) => {
				e.preventDefault();
				setDone(true);
			}}
		>
			<div className="lg:grid lg:grid-cols-2 flex flex-col items-stretch gap-4">
				<InputComponent
					label="First name"
					placeholder="Enter First name"
					name="firstName"
					type="text"
					required={true}
				/>
				<InputComponent
					label="Last name"
					placeholder="Enter Last name"
					name="lastName"
					type="text"
					required={true}
				/>
			</div>
			<InputComponent
				label="Phone"
				placeholder="Enter Phone"
				name="phone"
				type="tel"
				required={true}
			/>
			<InputComponent
				label="Email address"
				placeholder="Email address"
				name="email"
				type="email"
				required={true}
			/>
			<InputComponent
				label="Subject"
				placeholder="Enter Subject"
				name="subject"
				type="text"
			/>
			<InputComponent
				label="Comment"
				placeholder="Enter comment description"
				name="comment"
				type="textarea"
				required={true}
			/>
			<Button type="submit" onClick={() => {}}>
				Submit Feedback
			</Button>
		</form>
	);
};
