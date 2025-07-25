import React, { useState } from 'react';
import './ChatPage.css';
import { useChatContext, useChannelStateContext } from 'stream-chat-react';
import { toast } from 'react-hot-toast';

const ChatPage = () => {
  const { client } = useChatContext();
  const { channel } = useChannelStateContext();

  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    await channel.sendMessage({ text: message });
    setMessage('');
  };

  const handleVideoCall = () => {
    if (channel) {
      const callUrl = `${window.location.origin}/call/${channel.id}`;

      channel.sendMessage({
        text: `I've started a video call. Join me here: ${callUrl}`,
      });

      toast.success('Video call link sent successfully!');
    }
  };

  return (
    <div className="chat-page">
      <header className="chat-header">
        <h2 className="chat-title">Study Collaboration Room</h2>
        <button className="call-btn" onClick={handleVideoCall}>
          Start Video Call
        </button>
      </header>

      <div className="chat-container">
        <div className="message-window">
          <channel.MessageList />
        </div>

        <div className="message-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
