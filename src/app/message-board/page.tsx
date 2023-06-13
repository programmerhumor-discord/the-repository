import { Message } from "@/components/Message";
import { MessageForm } from "@/components/MessageForm";
import { get_all } from "@/message-board/redis";

export const dynamic = "force-dynamic";

export default async function MessageBoard() {
	const messages = await get_all();

	return (
		<>
			<div className="flex justify-between">
				<h2 className="text-4xl font-bold">Message Board</h2>
				<MessageForm />
			</div>
			<div className="flex flex-col items-center gap-3">
				{messages.map((x, i) => {
					return (
						<Message
							key={i}
							message={x}
						/>
					);
				})}
			</div>
		</>
	);
	// return <></>;
}
