import React from "react"
import ChatInput from "./ChatInput"

function Chat()
{
    return (
        <div id="chatSection">

            <label id="messagesBox"></label>

            <ChatInput />
        </div>
    )
}

export default Chat