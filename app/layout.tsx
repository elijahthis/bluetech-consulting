import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin-ext"],
});

export const metadata: Metadata = {
	title: "Bluetech Consulting",
	description: "Bluetech Consulting",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<Header />
				<div className="mt-[72px] lg:mt-[100px] ">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
