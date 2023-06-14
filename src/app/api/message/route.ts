import { create_message } from "@/message-board/redis";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	let { username = "", message = "" } = await request.json();
	username = String(username).trim();
	message = String(message).trim();
	const errors: string[] = []
	
	if (!username) errors.push("No username specified.")
	if (!message) errors.push("No message specified.")
	if (username.length > 10) errors.push("Username is too long, max 10 characters.")
	if (username.length > 150) errors.push("Username is too long, max 150 characters.")
	if (errors.length) {
		return NextResponse.json({
			ok: false,
			errors
		}, {
			status: 400
		});
	}

	create_message(username, message);
	return NextResponse.json({ ok: true, errors: [] });
}
