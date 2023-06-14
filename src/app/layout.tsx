import { IconGitBranch, IconMenu2 } from "@tabler/icons-react";
import clsx from "clsx";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { execSync } from "node:child_process";
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
	const commit = execSync("git rev-parse --short HEAD").toString();
	return (
		<html lang="en">
			<body
				className={clsx(
					inter.className,
					"flex flex-col gap-4 p-4 sm:px-20"
				)}>
				<div className="navbar rounded-box bg-neutral text-neutral-content">
					<div className="navbar-start">
						<div className="dropdown">
							<label
								tabIndex={0}
								className="btn-ghost btn lg:hidden">
								<IconMenu2 size={24} />
							</label>
							<ul
								tabIndex={0}
								className="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow">
								<li>
									<Link href="https://github.com/programmerhumor-discord/the-repository">
										Repo
									</Link>
								</li>
								<li>
									<Link href="https://discord.gg/rph">
										Discord
									</Link>
								</li>
								<li>
									<Link href="https://save3rdpartyapps.com/">
										F Reddit
									</Link>
								</li>
								<li>
									<Link href="https://programmerhumor-discord.github.io/the-repository/chatroom/">
										Chat
									</Link>
								</li>
							</ul>
						</div>
						<Link
							href="/"
							className="btn-ghost btn text-xl normal-case">
							the-repository
						</Link>
					</div>
					<div className="navbar-end hidden w-full lg:flex">
						<ul className="menu menu-horizontal px-1">
							<li>
								<Link href="https://github.com/programmerhumor-discord/the-repository">
									Repo
								</Link>
							</li>
							<li>
								<Link href="https://discord.gg/rph">
									Discord
								</Link>
							</li>
							<li>
								<Link href="https://save3rdpartyapps.com/">
									F Reddit
								</Link>
							</li>
							<li>
								<Link href="https://programmerhumor-discord.github.io/the-repository/chatroom/">
									Chat
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<h1 className="text-5xl font-black sm:text-7xl">
					the-repository
					<Image
						src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
						alt="reddit-logo"
						className="ml-2 hidden sm:inline"
						width={64}
						height={64}></Image>
				</h1>
				<p className="font-mono font-bold">
					<IconGitBranch
						size={20}
						className="inline"
					/>{" "}
					{commit}
				</p>
				<main className="flex flex-col gap-3">{children}</main>
			</body>
		</html>
	);
}
