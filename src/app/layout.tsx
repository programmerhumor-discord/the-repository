import clsx from "clsx";
import { Inter } from "next/font/google";
import Link from "next/link";
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
			<body
				className={clsx(
					inter.className,
					"flex flex-col gap-4 p-4 px-20"
				)}>
				<div className="navbar rounded-box bg-neutral text-neutral-content">
					<Link
						href="/"
						className="btn-ghost btn text-xl normal-case">
						the-repository
					</Link>
					<div className="join ml-auto flex">
						<Link href="https://github.com/programmerhumor-discord/the-repository/tree/main">
							<button className="join-item btn">
								THE REPO!!!!!
							</button>
						</Link>
						<Link href="https://discord.gg/rph">
							<button className="join-item btn">
								JOIN OUR DISCORD MF!!!
							</button>
						</Link>
						<Link href="https://save3rdpartyapps.com/">
							<button className="join-item btn">
								FUCK REDDIT!!!!
							</button>
						</Link>
						<Link href="https://programmerhumor-discord.github.io/the-repository/chatroom/">
							<button className="join-item btn">
								JOIN THE CHAT!!!11!
							</button>
						</Link>
					</div>
				</div>
				<h1 className="text-7xl font-black">the-repository</h1>
				<main className="flex flex-col gap-3">{children}</main>
			</body>
		</html>
	);
}
