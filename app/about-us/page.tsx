import TitleBanner from "@/components/TitleBanner";
import {
	OurPartners,
	OurTeam,
	OurValues,
	StoryVision,
} from "@/pageParts/about-us";

const AboutUs = () => {
	return (
		<main>
			<TitleBanner
				title="About Us"
				navTo={{ label: "About Us", link: "/about-us" }}
			/>
			<div className="py-[74px] ">
				<StoryVision />
				<OurTeam />
				<OurValues />
				<OurPartners />
			</div>
		</main>
	);
};

export default AboutUs;
