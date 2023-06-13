import { MessageForm } from "./MessageForm";

import { GetAllMessages } from "@/app/redis";

export async function MessageBoard() { 
    const messages = await GetAllMessages()

    return (
        <div>
            <h1 className='text-3xl font-bold mt-4'>
                Message Board
            </h1>

            <MessageForm />    

            {messages.map((message, index) => {
                return (
                    <div key={index} className='border border-gray-200 w-full rounded-md p-5 mb-3'>
                        <div className='text-2xl font-medium'>
                            {message.username}:
                        </div>
                        <div>
                            {message.message}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}