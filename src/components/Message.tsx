import { Message } from "@/message-board/redis";

interface MessageProps {
	message: Message;
}

export function Message(props: MessageProps) {
	return (
		<div className="card w-96 bg-neutral">
			<div className="card-body">
				<h2 className="card-title">{props.message.username}</h2>
				<p className="break-all">{props.message.message}</p>
			</div>
		</div>
	);
}
