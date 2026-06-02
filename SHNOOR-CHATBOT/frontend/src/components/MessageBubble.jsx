import React from 'react';
import { User, Bot } from 'lucide-react';

const MessageBubble = ({ text, isUser }) => {
    return (
        <div className={`message-wrapper ${isUser ? 'user' : 'bot'}`}>
            <div className="message-avatar">
                {isUser ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className="message-content">
                <p>{text}</p>
            </div>
        </div>
    );
};

export default MessageBubble;
