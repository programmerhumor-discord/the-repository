export const dynamic = "force-dynamic";
export const fetchCache = 'force-no-store';
export const revalidate = 0;

import { DestroyButton } from "@/components/DestroyButton";
import { MessageBoard } from "@/components/MessageBoard";

import { GetAllMessages } from "@/app/redis";

export default function Home() {
	return (
		<>
			<p>
				This repository was made by the r/ProgrammerHumor discord during
				the Reddit blackout. Make whatever you want and just push it 🚀
			</p>
			<div className="divider">ANTI-REDDIT</div>
			<section>
				<code>
					<pre>
						<h3>WE HATE REDDIT!</h3>
						<h3>LETS GOOOOOOOO!</h3>
						<h3>YEAH!!! FUCK REDDIT</h3>
					</pre>
				</code>
			</section>
			<DestroyButton />
			<MessageBoard />
		</>
	);
}
