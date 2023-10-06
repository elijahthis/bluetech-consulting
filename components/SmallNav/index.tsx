import Link from "next/link";
import { Fragment } from "react";

const SmallNav = ({
	navList,
}: {
	navList: { label: string; link: string }[];
}) => {
	return (
		<div className="grid place-items-center absolute w-full bottom-[-27px] ">
			<div
				className="rounded bg-white w-max px-6 py-4 flex flex-row items-center gap-4 text-[18px] leading-[24px] font-bold  "
				style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.19)" }}
			>
				<Link href="/" className="text-[#696969]">
					Home
				</Link>
				<span>|</span>
				{navList.map((navTo, index) => (
					<Fragment key={index}>
						<Link href={navTo.link}>{navTo.label}</Link>
						{index < navList.length - 1 && <span>|</span>}
					</Fragment>
				))}
			</div>
		</div>
	);
};

export default SmallNav;
