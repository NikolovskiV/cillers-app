import React from 'react'
export interface ChatMessageProps {
    message: string;
    isSentByCurrentUser: boolean;
}
export interface ChatHistoryProps {
    messages: ChatMessageProps[];
    sendMessage: (message: string) => void;
    handleNavigation: (nav: string) => void;
}

 function ChatMessage({ message, isSentByCurrentUser }: ChatMessageProps) {
    return (
        <div className={`message flex ${isSentByCurrentUser ? 'justify-start' : 'justify-end'} mb-2`}>
      <div className={`message-content ${isSentByCurrentUser ? 'bg-gray-200 text-left' : 'bg-gray-500 text-right'} p-2 rounded-md max-w-[70%]`}>
        <p className="text-sm">{message}</p>
      </div>
    </div>
    )
}
 function ChatInput({ sendMessage }: { sendMessage: (message: string) => void }) {
    const [message, setMessage] = React.useState('')
    return (
        <div className="chat-input flex items-center p-3 bg-white border-t border-gray-300">
            <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 py-2 px-4 border border-gray-300 rounded-md mr-3 focus:outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                className="py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
                onClick={() => {
                    sendMessage(message)
                    setMessage('')
                }}
            >
                Send
            </button>
        </div>
    )
}
export default function Chat({ messages, sendMessage, handleNavigation }: ChatHistoryProps) {
    return (
        <div>
            <div className="chat-window flex flex-col h-full">
            <button onClick={() => handleNavigation('language')}
             className="absolute top-0 right-0 m-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">
                    Done
                </button>
                <div className="messages-container flex-1 overflow-y-auto p-4">
                    {messages.map((message, index) => (
                        <ChatMessage
                            key={index}
                            message={message.message}
                            isSentByCurrentUser={message.isSentByCurrentUser}
                        />
                    ))}
                </div>
                <ChatInput sendMessage={sendMessage} />
            </div>
          
        </div>
    )
}
