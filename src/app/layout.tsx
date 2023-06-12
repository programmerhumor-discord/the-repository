import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"]
});

export const metadata = {};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="flex flex-col gap-3 p-4">{children}</main>
			</body>
		</html>
	);
}
