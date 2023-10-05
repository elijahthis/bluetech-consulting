import Image from "next/image";
import home1Img from "@/assets/images/home-1.png";

export const FounderMessage = () => {
	return (
		<section className="flex lg:flex-row flex-col items-start justify-center gap-12 py-6 px-4 pb-[60px]">
			<Image
				src={home1Img}
				alt={`Founder - Yinka`}
				className="w-full lg:w-[312px]"
			/>
			<div>
				<h2 className="text-[28px] leading-[normal] mb-6 ">
					A message from our founder
				</h2>
				<p className="lg:max-w-[468px] text-[20px] ">
					At Bluetech Consulting, we are more than just a training and
					consulting outfit; we are your trusted partner on the journey to
					mastering the world class, highly demanded skill. With a passion for
					education and a commitment to excellence, we empower individuals and
					organizations to thrive in the ever-evolving digital landscape.{" "}
				</p>
			</div>
		</section>
	);
};
