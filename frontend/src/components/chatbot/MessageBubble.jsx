import React from 'react';
import { User, Bot } from 'lucide-react';

const MessageBubble = ({ text, isUser }) => {
    return (
        <div className={`message-wrapper ${isUser ? 'user' : 'bot'}`}>
            <div className="message-avatar">
                {isUser ? <User size={18} /> : <Bot size={18} />}
            </div>
            <div className="message-content">
                {isUser ? text : <span dangerouslySetInnerHTML={{ __html: text }} />}
            </div>
        </div>
    );
};

export default MessageBubble;
