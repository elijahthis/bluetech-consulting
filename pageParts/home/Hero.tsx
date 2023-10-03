export const Hero = () => {
	return (
		<section>
			<video className="w-full" muted autoPlay loop>
				<source src={"/videos/short-vid.mp4"} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="flex flex-row items-center gap-4 justify-between py-[41px] px-[51px] pl-[130px] bg-[#051C2C] ">
				<p className="text-white font-semibold text-[20px] leading-[24px] ">
					October cohort begins on Saturday, 7th October. Early birds get a 10%
					discount
				</p>
				<div className="flex flex-row items-center gap-6">
					<button className="bg-white text-[#051C2C] py-6 px-10 font-semibold rounded-2xl cursor-pointer ">
						Find out more
					</button>
					<button className="bg-white text-[#051C2C] py-6 px-10 font-semibold rounded-2xl cursor-pointer ">
						Book a free consultation
					</button>
				</div>
			</div>
		</section>
	);
};
