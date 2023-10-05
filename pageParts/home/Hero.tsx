export const Hero = () => {
	return (
		<section>
			<video className="w-full" muted autoPlay loop>
				<source
					src={
						"https://res.cloudinary.com/dywp91yx7/video/upload/v1696440993/bluetech-consulting/short-vid.mp4"
					}
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>
			<div className="flex flex-col lg:flex-row lg:items-center gap-5 justify-between py-6 px-4 lg:py-[41px] lg:px-[51px] lg:pl-[130px] bg-[#051C2C] ">
				<p className="text-white font-semibold lg:text-[20px] lg:leading-[24px] ">
					October cohort begins on Saturday, 7th October. Early birds get a 10%
					discount
				</p>
				<div className="flex flex-row items-center gap-6">
					<button className="bg-white text-[#051C2C] py-4 lg:py-6 px-3 lg:px-10 font-semibold lg:rounded-2xl rounded-lg cursor-pointer w-max text-sm ">
						Find out more
					</button>
					<button className="bg-white text-[#051C2C] py-4 lg:py-6 px-3 lg:px-10 font-semibold lg:rounded-2xl rounded-lg cursor-pointer w-max text-sm ">
						Book a free consultation
					</button>
				</div>
			</div>
		</section>
	);
};
