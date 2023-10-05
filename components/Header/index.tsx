"use client";
import { LogoIcon } from "@/components/svgs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
	const navList: { name: string; url: string }[] = [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "About Us",
			url: "/about-us",
		},
		{
			name: "Courses",
			url: "/courses",
		},
		{
			name: "Consulting",
			url: "/consulting",
		},
		{
			name: "Contact Us",
			url: "/contact-us",
		},
	];

	const pathname = usePathname();

	return (
		<header className="fixed top-0 w-full bg-white flex flex-row items-center lg:justify-center justify-between lg:px-8 px-4 lg:py-[38px] py-4 z-10 ">
			<Link href="/" className="lg:absolute left-8 top-[14px] h-10 lg:h-[65px]">
				<LogoIcon className="h-full" />
			</Link>
			<nav className="hidden lg:block">
				<ul className="flex flex-row items-center gap-9 ">
					{navList.map((navItem, ind) => (
						<li
							key={ind}
							className={`${
								navItem.url === pathname
									? "text-[#051C2C] underline font-bold "
									: "text-[#8A8A8A] font-medium"
							} `}
							style={{
								textUnderlineOffset: "0.5rem",
								textDecorationThickness: "2px",
							}}
						>
							<Link href={navItem.url}>{navItem.name}</Link>
						</li>
					))}
				</ul>
			</nav>
			<HiMenuAlt3 className="lg:hidden block" size={32} />
		</header>
	);
};

export default Header;
