import { OpenQuotesIcon } from "@/components/svgs";

export const Testimonials = () => {
	const testimonialList: { name: string; desc: string; body: string }[] = [
		{
			name: "Tola",
			desc: "BA Candidate",
			body: "Bluetechconsulting team was able to provide the right level of support during our Agile Transformation journey. They understood our needs and tailored solutions that helped achieve our goal.",
		},
		{
			name: "Anu",
			desc: "Scrum Master candidate",
			body: "Bluetechconsulting team was able to provide the right level of support during our Agile Transformation journey. They understood our needs and tailored solutions that helped achieve our goal.",
		},
		{
			name: "John Doe",
			desc: "Scrum Master candidate",
			body: "Bluetechconsulting team was able to provide the right level of support during our Agile Transformation journey. They understood our needs and tailored solutions that helped achieve our goal.",
		},
	];

	return (
		<section className="bg-[#E2E9EE] py-16 px-6 flex flex-col items-center">
			<h2 className="lg:mb-10 mb-4 text-[28px] leading-[24px] text-center ">
				What people are saying
			</h2>
			<p className="lg:mb-6 mb-12 font-medium max-w-[700px] text-center ">
				We take pride in the positive feedback we receive from our clients. Here
				are a few examples of feedback from our mentees.
			</p>
			<div className="lg:grid lg:grid-cols-3 flex flex-col items-stretch lg:gap-6 gap-10 lg:px-[238px] px-0">
				{testimonialList.map((item, ind) => (
					<Testimonial data={item} key={ind} />
				))}
			</div>
		</section>
	);
};

const Testimonial = ({
	data,
}: {
	data: { name: string; desc: string; body: string };
}) => (
	<div className="bg-white px-6 py-3 pt-9 rounded-lg relative ">
		<span className="absolute top-[-15px] ">
			<OpenQuotesIcon />
		</span>
		<p className="mb-6">{data.body}</p>
		<p className="text-[18px] leading-[24px] font-bold text-right mb-1">
			{data.name}
		</p>
		<p className="text-right text-[18px] leading-[24px] font-medium ">
			{data.desc}
		</p>
	</div>
);
