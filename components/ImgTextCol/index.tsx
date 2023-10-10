import Image, { StaticImageData } from "next/image";

interface ImgTextColProps {
	imgURL: string | StaticImageData;
	textSide: "left" | "right";
	children: JSX.Element | JSX.Element[];
}

const ImgTextCol = ({ imgURL, textSide, children }: ImgTextColProps) => {
	return (
		<div
			className={`lg:px-[7.08vw] px-4 lg:grid lg:grid-cols-2 flex flex-col items-center gap-12`}
		>
			<Image
				src={imgURL}
				alt=""
				width={594}
				height={443}
				className={`w-full ${textSide === "right" ? "" : "lg:order-1 right"}`}
			/>
			<div>{children}</div>
		</div>
	);
};

export const TiTleTextStory = ({
	smallTitle,
	title,
	body,
}: {
	smallTitle?: string;
	title: string;
	body: string | JSX.Element | JSX.Element[];
}) => {
	return (
		<>
			{smallTitle ? <p className="mb-4">{smallTitle}</p> : <></>}
			<h2 className="lg:mb-10 mb-5 text-[28px] lg:leading-[24px] leading-[normal] ">
				{title}
			</h2>
			<div className="text-[20px] leading-[24px] ">{body}</div>
		</>
	);
};

export const NumberedItem = ({
	index,
	title,
}: {
	index: number;
	title: string;
}) => (
	<li className="flex flex-row items-center gap-6">
		<span className="text-[#051C2C] w-[38px] min-w-[38px] h-[38px] border border-[2px] border-[#051C2C] rounded-full grid place-items-center font-bold ">
			{index}
		</span>
		<div>
			<h6 className="text-base">{title}</h6>
		</div>
	</li>
);

export default ImgTextCol;
