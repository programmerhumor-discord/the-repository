"use client";

import { MessageForm } from "@/components/MessageForm";

export function MessageBoardDisplay(props: {
    messages: {
        username: string,
        message: string,
    }[]
}) {
    return (
        <div>
            <h1 className='text-3xl font-bold mt-4'>
                Message Board
            </h1>

            <MessageForm />

            {props.messages.map((message, index) => {
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