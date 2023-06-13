export async function MessageBoard(props: {
    messages: {
        username: string;
        message: string;
    }[],
}) { 
    return (
        <div>   
            <h1>Message Board</h1>
            {props.messages.map((message, index) => {
                return (
                    <div key={index}>
                        <div>{message.username}</div>
                        <div>{message.message}</div>
                    </div>
                )
            })}
            <h2>Leave a message</h2>
            <form action="/message" method="POST">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="message">Message</label>
                <input type="text" name="message" id="message" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}