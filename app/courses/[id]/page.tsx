import TitleBanner from "@/components/TitleBanner";
import { courseList } from "@/data/constants";

const CoursePage = ({ params }: { params: { id: string } }) => {
	const currentCourse = courseList.find((course) => course.id === params.id);

	if (!currentCourse) {
		return (
			<main>
				<TitleBanner
					title="Courses"
					navList={[{ label: "Courses", link: "/courses" }]}
				/>
				<h1>Course Not Found</h1>
			</main>
		);
	}

	return (
		<main>
			<TitleBanner
				title="Courses"
				navList={[
					{ label: "Courses", link: "/courses" },
					{ label: currentCourse.short_title, link: currentCourse.page_url },
				]}
			/>
		</main>
	);
};

export default CoursePage;
