import { RiLoader5Fill } from "react-icons/ri";

const Loading = () => {
	return (
		<main className="h-[calc(100vh-72px)] lg:h-[calc(100vh-100px)] grid place-items-center ">
			<RiLoader5Fill className="animate-spin text-[#1E3A8A] text-6xl" />
		</main>
	);
};

export default Loading;
