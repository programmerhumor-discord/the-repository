import { createClient } from "redis";

export type Message = { username: string; message: string };

export async function create_message(username: string, message: string) {
	const client = createClient({ url: process.env.REDIS_URL! });
	await client.connect();

	client.json.arrInsert("messages", "$", 0, {
		username,
		message
	});
}

export async function get_all(): Promise<Message[]> {
	const client = createClient({ url: process.env.REDIS_URL! });
	await client.connect();
	return (await client.json.get("messages")) as Message[];
}
