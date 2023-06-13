export const dynamic = "force-dynamic";
export const fetchCache = 'force-no-store';
export const revalidate = 0;

import { GetAllMessages } from "@/app/redis";
import { MessageBoardDisplay } from "@/components/MessageBoardDisplay";

export async function MessageBoard() {
    const messages = await GetAllMessages()

    return (
        <div>
            <MessageBoardDisplay messages={messages} />
        </div>
    )
}