import { DestroyButton } from "@/components/DestroyButton";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
	return (
		<>
			<div className="navbar rounded-box bg-neutral text-neutral-content">
				<Link
					href="/"
					className="btn-ghost btn text-xl normal-case">
					the-repository
				</Link>
				<div className="join ml-auto flex">
					<Link href="https://github.com/programmerhumor-discord/the-repository/tree/main">
						<button className="join-item btn">THE REPO!!!!!</button>
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
				</div>
			</div>
			<h1 className="text-7xl font-black">the-repository</h1>
			<p>
				This repository was made by the r/ProgrammerHumor discord during
				the Reddit blackout. Make whatever you want and just push it 🚀
			</p>
			<div className="divider">ANTI-REDDIT</div>
			<div className="section">
				<Image
					src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
					alt="reddit-logo"
					width={64}
					height={64}></Image>
				<div className="content">
					<h3>WE HATE REDDIT!!!!</h3>
					<h3>YEAH!!! FUCK REDDIT</h3>
				</div>
			</div>
			<div className="separator"></div>
			<h2>WE ARE PRO HATE CRIMES</h2>
			<p>against reddit and u/spez***</p>
			<div className="separator"></div>
			<DestroyButton />
		</>
	);
}
