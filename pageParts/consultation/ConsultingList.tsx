import Button from "@/components/Button";
import ImgTextCol, { TiTleTextStory } from "@/components/ImgTextCol";
import { consultingList } from "@/data/constants";

const ConsultingList = () => {
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
				<Button>Book Consultation</Button>
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
