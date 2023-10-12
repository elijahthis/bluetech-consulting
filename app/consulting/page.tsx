import TitleBanner from "@/components/TitleBanner";
import ConsultingList from "@/pageParts/consultation/ConsultingList";

const Consulting = () => {
	return (
		<main>
			<TitleBanner
				title="Consultation"
				navList={[{ label: "Consultation", link: "/consultation" }]}
			/>
			<ConsultingList />
		</main>
	);
};

export default Consulting;
