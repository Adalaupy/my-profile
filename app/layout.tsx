import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
	title: "Ada's Portfolio",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg1 relative">
				<Navbar />
				{children}
				<Contact />
			</body>
		</html>
	);
}