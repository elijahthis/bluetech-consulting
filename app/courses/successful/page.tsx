"use client";
import SuccessCard from "@/components/SuccessCard";
import { useRouter } from "next/navigation";

const SuccessfulPage = () => {
	const router = useRouter();

	return (
		<main className="bg-[#F0F9FF] py-16 px-0 pt-[77px] lg:px-[19.58vw] ">
			<SuccessCard
				title="Booking Successful"
				buttonText="Continue"
				buttonAction={() => {
					router.push("/courses");
				}}
			>
				<p>
					You have successfully enrolled on Business Analysis. You will receive
					a confirmation email to that effect shortly. In the meantime, you may
					contact us at info@bluetechconsulting.uk for any further enquiries.
				</p>
			</SuccessCard>
		</main>
	);
};

export default SuccessfulPage;
