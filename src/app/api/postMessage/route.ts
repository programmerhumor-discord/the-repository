import { StoreMessage } from "@/app/redis";

export async function POST(request: Request) {
    // get username and message
    const { username, message } = await request.json();

    StoreMessage(username, message);
}