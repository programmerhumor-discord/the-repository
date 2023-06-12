import { DestroyButton } from "@/components/DestroyButton";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<p>
				This repository was made by the r/ProgrammerHumor discord during
				the Reddit blackout. Make whatever you want and just push it 🚀
			</p>
			<div className="divider">ANTI-REDDIT</div>
			<section>
				<Image
					src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
					alt="reddit-logo"
					width={64}
					height={64}></Image>
				<div>
					<h3>WE HATE REDDIT!</h3>
					<h3>LETS GOOOOOOOO!</h3>
					<h3>YEAH!!! FUCK REDDIT</h3>
				</div>
			</section>
			<DestroyButton />
		</>
	);
}
