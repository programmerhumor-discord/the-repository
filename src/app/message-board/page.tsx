import { MessageBoard } from "@/components/MessageBoard";
import { get_all } from "@/message-board/redis";

export const dynamic = "force-dynamic";

export default async function MessageBoardPage() {
	const messages = await get_all();

	return (
		<>
			<MessageBoard messages={messages} />
		</>
	);
}
