"use client";

import { useState } from "react";

export function MessageForm() {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        console.log("called");
        e.preventDefault();
        setSubmitting(true);

        try {
            console.log(username, message);
            const response = await fetch('/api/postMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, message }),
            });

            if (response.ok) {
                console.log('Message sent successfully!');
                // Reset the form
                setUsername('');
                setMessage('');
            } else {
                console.error('Failed to send api.');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        setSubmitting(false);
    };

    return (
        <div className='border rounded-md w-96 p-5 mt-4 mb-5'>
            <h2 className='text-xl font-medium ml-2 mt-2 mb-4'>Leave a message</h2>
            <form onSubmit={handleSubmit}>
                <div className='ml-2'>
                    <label htmlFor="username"><b>Username</b></label><br/>
                    <input
                        name="username"
                        type="text"
                        id="username"
                        placeholder='Username'
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='p-2 mt-2 border border-gray-200 bg-base-100 rounded-md focus:outline-offset-2 focus:outline-gray-400 outline-none transition-all'
                    /><br/>
                    <div className='mt-2'>
                        <label htmlFor="message"><b>Message</b></label><br/>
                        <textarea
                            name="message"
                            id="message"
                            placeholder='Message'
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className='p-2 mt-2 w-69 border border-gray-200 bg-base-100 rounded-md focus:outline-offset-2 focus:outline-gray-400 outline-none transition-all'
                        />
                    </div>
                </div>
                <button type="submit" disabled={submitting} className='border border-blue-500 rounded-md px-4 py-2 m-2'>Submit</button>
            </form>
        </div>
    )
}