import placeImg from "@/assets/images/img-2.jpg";
import TeamCard from "@/components/TeamCard";
import Image, { StaticImageData } from "next/image";

export const OurTeam = () => {
	const teamList: {
		name: string;
		position: string;
		desc: string;
		imgURL: string | StaticImageData;
	}[] = [
		{
			name: "Yinka Aina",
			position: "COO",
			desc: "Bluetechconsulting team was able to provide the right level of support during our Agile Transformation journey. ",
			imgURL: placeImg,
		},
		{
			name: "Yemi Oliyide",
			position: "CTO",
			desc: "Bluetechconsulting team was able to provide the right level of support during our Agile Transformation journey. ",
			imgURL: placeImg,
		},
		{
			name: "Folake Aina",
			position: "Operation Director",
			desc: "Bluetechconsulting team was able to provide the right level of support during our Agile Transformation journey. ",
			imgURL: placeImg,
		},
	];

	return (
		<div className="bg-[#E2E9EE] pt-12 pb-20 px-[102px] ">
			<p className="text-center mb-[30px]">Our Team</p>
			<h2 className="text-center mb-[78px] text-[28px] leading-[24px] ">
				Meet those behind the amazing works
			</h2>
			<div className="grid grid-cols-3 gap-6">
				{teamList.map((teamMember, ind) => (
					<TeamCard data={teamMember} key={ind} />
				))}
			</div>
		</div>
	);
};
