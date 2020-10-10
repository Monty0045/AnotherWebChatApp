import React from "react"


class ChatInput extends React.Component
{

    sendMessage(){
        console.log("this works")
    }

    render() {
        return (
            <div className="chat-input-area">
                    
                    <textarea placeholder="Enter a message!" name="msg" required></textarea>
                    <button type="button" onClick={this.sendMessage.bind(this)} >Send Message</button>
            </div>
        )
    }
}

export default ChatInput