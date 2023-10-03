import { DescCards, FounderMessage, Hero, Sponsors } from "@/pageParts/home";

const Home = () => {
	return (
		<main>
			<Hero />
			<Sponsors />
			<DescCards />
			<FounderMessage />
		</main>
	);
};

export default Home;
