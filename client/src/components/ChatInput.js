import React from "react"


class ChatInput extends React.Component
{

    

    render() {

        function sendMessage(){
            //socket.sendMessage("woah woah woah");
            console.log("this works")
        }

        return (
            <div className="chat-input-area">
                    
                    <textarea placeholder="Enter a message!" name="msg" required></textarea>
                    <button type="button" onClick={sendMessage.bind(this)} >Send Message</button>
            </div>
        )
    }
}

export default ChatInput