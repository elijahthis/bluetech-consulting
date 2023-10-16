"use client";
import Button from "@/components/Button";
import ButtonDropdown from "@/components/ButtonDropdown";
import ImgTextCol, { TiTleTextStory } from "@/components/ImgTextCol";
import { consultingList } from "@/data/constants";
import { useRouter } from "next/navigation";

const ConsultingList = () => {
	const router = useRouter();

	return (
		<div className="flex flex-col items-stretch gap-[91px] pt-[101px] pb-[75px] ">
			<ImgTextCol
				imgURL="https://loremflickr.com/594/443?random=1"
				textSide="right"
			>
				<TiTleTextStory
					title="One-on-one Consultation"
					body={
						<div className="mt-[-10px] text-[18px] mb-[25px]">
							Today is the best day to launch your career into tech. If you are
							considering our taster session or would like to dive straight into
							our business analyst, scrum master or product owner training, then
							contact us now.
						</div>
					}
				/>
				<ButtonDropdown
					label="Book Consultation"
					optionList={[
						{
							label: { title: "90 min. session", desc: "" },
							action: () => {
								if (window !== undefined)
									window.open(
										"https://calendly.com/bluetechconsulting/90-mins-consultation-1",
										"_blank"
									);
							},
						},
						{
							label: { title: "60 min. session", desc: "" },
							action: () => {
								if (window !== undefined)
									window.open(
										"https://calendly.com/bluetechconsulting/60-mins-consultation",
										"_blank"
									);
							},
						},
						{
							label: { title: "30 min. session", desc: "" },
							action: () => {
								if (window !== undefined)
									window.open(
										"https://calendly.com/bluetechconsulting/30-mins-consultation",
										"_blank"
									);
							},
						},
					]}
					ind={0}
				/>
			</ImgTextCol>
			<ImgTextCol
				imgURL="https://loremflickr.com/594/443?random=5"
				textSide="left"
			>
				<TiTleTextStory
					title="Digital Transformation Consulting"
					body={
						<div className="mt-[-10px] text-[18px] mb-[25px]">
							Today is the best day to launch your career into tech. If you are
							considering our taster session or would like to dive straight into
							our business analyst, scrum master or product owner training, then
							contact us now. <br />
							Today is the best day to launch your career into tech. If you are
							considering our taster session or would like to dive straight into
							our business analyst, scrum master or product owner training, then
							contact us now.Today is the best day to launch your career into
							tech. If you are considering our taster session or would like to
							dive straight into our business analyst, scrum master or product
							owner training, then contact us now.Today is the best day to
							launch your career into tech. If you are considering our taster
							session or would like to dive straight into our business analyst,
							scrum master or product owner training, then contact us now.
						</div>
					}
				/>
				<Button>Book Consultation</Button>
			</ImgTextCol>
		</div>
	);
};

export default ConsultingList;
