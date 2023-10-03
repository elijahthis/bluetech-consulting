import styles from "./styles.module.css";

interface TitleBannerProps {
	title: string;
}

const TitleBanner = ({ title }: TitleBannerProps) => {
	return (
		<section className={`h-[186px] pt-16 ${styles.TitleBanner} `}>
			<h1 className="text-center">{title}</h1>
		</section>
	);
};

export default TitleBanner;
