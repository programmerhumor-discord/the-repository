"use client";

import { Message } from "@/message-board/redis";
import { useState } from "react";
import { Message as MessageComponent } from "./Message";
import { MessageForm } from "./MessageForm";

interface MessageBoardProps {
	messages: Message[];
}

export function MessageBoard(props: MessageBoardProps) {
	const [messages, setMessages] = useState<Message[]>(props.messages);
	return (
		<>
			<div className="flex justify-between">
				<h2 className="text-4xl font-bold">Message Board</h2>
				<MessageForm
					addMessage={message => setMessages([message, ...messages])}
				/>
			</div>
			<div className="flex flex-col items-center gap-3">
				{messages.map((x, i) => {
					return (
						<MessageComponent
							key={i}
							message={x}
						/>
					);
				})}
			</div>
		</>
	);
}
