import { create_message } from "@/message-board/redis";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const { username, message } = await request.json();

	if (!username || !message) {
		return NextResponse.json({
			message: "No message or username specified"
		});
	}
	create_message(username.substring(0, 10), message.substring(0, 150));
	return NextResponse.json({ message: "OK" });
}
