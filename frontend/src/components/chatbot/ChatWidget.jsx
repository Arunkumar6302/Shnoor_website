import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import ChatWindow from './ChatWindow';
import './chatbot.css';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="chat-widget-container">
            {isOpen ? (
                <ChatWindow onClose={() => setIsOpen(false)} />
            ) : (
                <button 
                    className="chat-fab" 
                    onClick={() => setIsOpen(true)}
                    aria-label="Open chat"
                >
                    <MessageSquare size={24} />
                </button>
            )}
        </div>
    );
};

export default ChatWidget;
