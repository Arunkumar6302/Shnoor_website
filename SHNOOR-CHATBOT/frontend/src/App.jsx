import React from 'react';
import ChatWindow from './components/ChatWindow';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <div className="centered-chat-wrapper">
        <ChatWindow onClose={() => {}} />
      </div>
    </div>
  );
}

export default App;
