"use client";
import Button from "@/components/Button";
import InputComponent from "@/components/InputComponent";
import RadioComponent from "@/components/RadioComponent";
import { BankIcon, CardIcon, PaypalIcon } from "@/components/svgs";
import { Dispatch, SetStateAction } from "react";

interface PersonalInfoProps {
	currentStep: number;
	setCurrentStep: Dispatch<SetStateAction<number>>;
}

export const PersonalInfo = ({
	currentStep,
	setCurrentStep,
}: PersonalInfoProps) => {
	return (
		<form
			action=""
			className="flex flex-col gap-6 items-stretch"
			onSubmit={(e) => {
				e.preventDefault();
				setCurrentStep(currentStep + 1);
			}}
		>
			<div className="lg:grid lg:grid-cols-2 flex flex-col items-stretch gap-4">
				<InputComponent
					label="First name"
					placeholder="Enter First name"
					name="firstName"
					type="text"
					showLabel={false}
				/>
				<InputComponent
					label="Last name"
					placeholder="Enter Last name"
					name="lastName"
					type="text"
					showLabel={false}
				/>
			</div>
			<InputComponent
				label="Email address"
				placeholder="Email address"
				name="email"
				type="email"
				showLabel={false}
			/>
			<InputComponent
				label="Phone"
				placeholder="Enter Phone"
				name="phone"
				type="tel"
				showLabel={false}
			/>
			<Button
				type="submit"
				onClick={() => {}}
				style={{ width: "100%", marginTop: "8px" }}
			>
				Proceed to Payment
			</Button>
		</form>
	);
};

export const PaymentMethod = ({
	currentStep,
	setCurrentStep,
}: PersonalInfoProps) => {
	const paymentMethods: { label: string | JSX.Element; value: string }[] = [
		{
			label: (
				<div className="flex flex-row items-center gap-2">
					<CardIcon />
					<p>Pay with Bank Card</p>
				</div>
			),
			value: "bank_card",
		},
		{
			label: (
				<div className="flex flex-row items-center gap-2">
					<PaypalIcon />
					<p>Pay with Paypal</p>
				</div>
			),
			value: "paypal",
		},
		{
			label: (
				<div className="flex flex-row items-center gap-2">
					<BankIcon />
					<p>Pay with Internet banking</p>
				</div>
			),
			value: "internet_banking",
		},
	];
	return (
		<form
			className="flex flex-col items-stretch gap-6"
			onSubmit={(e) => {
				e.preventDefault();
				setCurrentStep(currentStep + 1);
			}}
		>
			{paymentMethods.map((item, ind) => (
				<RadioComponent label={item.label} value={item.value} key={ind} />
			))}
			<Button
				type="submit"
				onClick={() => {}}
				style={{ width: "100%", marginTop: "1rem" }}
			>
				Proceed to Payment
			</Button>
		</form>
	);
};

export const PaymentDetails = ({
	currentStep,
	setCurrentStep,
}: PersonalInfoProps) => {
	return (
		<form
			action=""
			className="flex flex-col gap-6 items-stretch"
			onSubmit={(e) => {
				e.preventDefault();
				// setCurrentStep(currentStep + 1);
			}}
		>
			<InputComponent
				label="Card holder name"
				placeholder="Card holder name"
				name="card_holder_name"
				type="text"
				showLabel={false}
			/>
			<InputComponent
				label="Card number"
				placeholder="Card number"
				name="card_number"
				type="text"
				showLabel={false}
			/>
			<div className="lg:grid lg:grid-cols-2 flex flex-col items-stretch gap-4">
				<InputComponent
					label="Expiry date"
					placeholder="Expiry date"
					name="expiry_date"
					type="text"
					showLabel={false}
				/>
				<InputComponent
					label="CCV"
					placeholder="CCV"
					name="ccv"
					type="text"
					showLabel={false}
				/>
			</div>
			<Button
				type="submit"
				onClick={() => {}}
				style={{ width: "100%", marginTop: "8px" }}
			>
				Proceed to Payment
			</Button>
		</form>
	);
};
