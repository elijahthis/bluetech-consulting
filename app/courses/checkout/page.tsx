"use client";
import StepperCard from "@/components/StepperCard";
import {
	PaymentDetails,
	PaymentMethod,
	PersonalInfo,
} from "@/pageParts/courses/CheckoutComponents";
import { useState } from "react";

const CheckoutPage = () => {
	const [currentStep, setCurrentStep] = useState<number>(1);

	return (
		<main className="bg-[#F0F9FF] py-16 px-0 pt-[77px] lg:px-[19.58vw] ">
			<StepperCard
				steps={["Personal Info", "Payment Method", "Payment Details"]}
				currentStep={currentStep}
				components={[
					<PersonalInfo
						currentStep={currentStep}
						setCurrentStep={setCurrentStep}
						key={0}
					/>,
					<PaymentMethod
						currentStep={currentStep}
						setCurrentStep={setCurrentStep}
						key={1}
					/>,
					<PaymentDetails
						currentStep={currentStep}
						setCurrentStep={setCurrentStep}
						key={2}
					/>,
				]}
			/>
		</main>
	);
};

export default CheckoutPage;
