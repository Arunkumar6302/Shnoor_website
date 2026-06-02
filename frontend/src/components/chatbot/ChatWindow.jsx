import React, { useState, useRef, useEffect } from 'react';
import { Send, X, ChevronDown, ChevronUp } from 'lucide-react';
import MessageBubble from './MessageBubble';
import { sendMessage } from '../../services/chatApi';

const ChatWindow = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { text: "Hello! I am your company assistant. How can I help you today?", isUser: false }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [websiteId, setWebsiteId] = useState("shnoor");
    const [scrollState, setScrollState] = useState('none');
    const messagesEndRef = useRef(null);
    const messagesContainerRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToTop = () => {
        messagesContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleScrollClick = (e) => {
        e.preventDefault();
        if (scrollState === 'down') {
            scrollToBottom();
        } else if (scrollState === 'up') {
            scrollToTop();
        }
    };

    const handleScroll = () => {
        const container = messagesContainerRef.current;
        if (container) {
            const hasScrollbar = container.scrollHeight > container.clientHeight;
            if (!hasScrollbar) {
                setScrollState('none');
                return;
            }
            const isScrolledUp = container.scrollHeight - container.scrollTop - container.clientHeight > 50;
            setScrollState(isScrolledUp ? 'down' : 'up');
        }
    };

    useEffect(() => {
        scrollToBottom();
        setTimeout(handleScroll, 100);
    }, [messages, isLoading]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg = inputValue.trim();
        setInputValue("");
        setMessages(prev => [...prev, { text: userMsg, isUser: true }]);
        setIsLoading(true);

        try {
            const response = await sendMessage(userMsg, websiteId);
            setMessages(prev => [...prev, { text: response.answer, isUser: false }]);
        } catch (error) {
            setMessages(prev => [...prev, { text: "Sorry, I am having trouble connecting to the server.", isUser: false }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chat-window">
            <div className="chat-header">
                <div className="header-info">
                    <div className="status-dot"></div>
                    <h3>Support Chat</h3>
                </div>
                
                <div className="header-actions">
                    <select 
                        className="website-selector"
                        value={websiteId} 
                        onChange={(e) => {
                            setWebsiteId(e.target.value);
                            setMessages([{ text: "Switched knowledge base! How can I help you?", isUser: false }]);
                        }}
                    >
                        <option value="shnoor">Shnoor International</option>
                        <option value="lms">SHNOOR LMS</option>
                        <option value="hrm">SHNOOR HRM</option>
                        <option value="assessments">SHNOOR Assessments</option>
                        <option value="invoicing">SHNOOR Invoicing</option>
                        <option value="other">Other Website</option>
                    </select>

                    <button className="close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>
            </div>
            
            <div className="chat-messages" ref={messagesContainerRef} onScroll={handleScroll}>
                {messages.map((msg, idx) => (
                    <MessageBubble key={idx} text={msg.text} isUser={msg.isUser} />
                ))}
                {isLoading && (
                    <div className="message-wrapper bot">
                        <div className="typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {scrollState !== 'none' && (
                <button 
                    className="scroll-action-btn" 
                    onClick={handleScrollClick} 
                    aria-label={scrollState === 'down' ? "Scroll to bottom" : "Scroll to top"}
                >
                    {scrollState === 'down' ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
                </button>
            )}

            <form className="chat-input-area" onSubmit={handleSend}>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    disabled={isLoading}
                />
                <button type="submit" disabled={!inputValue.trim() || isLoading}>
                    <Send size={18} />
                </button>
            </form>
        </div>
    );
};

export default ChatWindow;
