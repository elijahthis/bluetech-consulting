import SmallNav from "../SmallNav";
import styles from "./styles.module.css";

interface TitleBannerProps {
	title: string;
	navTo: { label: string; link: string };
}

const TitleBanner = ({ title, navTo }: TitleBannerProps) => {
	return (
		<section className={`h-[186px] pt-16 relative ${styles.TitleBanner} `}>
			<h1 className="text-center">{title}</h1>
			<SmallNav navTo={navTo} />
		</section>
	);
};

export default TitleBanner;
