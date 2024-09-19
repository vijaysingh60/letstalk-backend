import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './chat.css'
import { Link } from 'react-router-dom';

// Connect to the backend (ensure the URL is correct)
const socket = io('http://192.168.217.22:3000'); // Change to your server's URL

const Chat = () => {
    const [message, setMessage] = useState(''); // Store the current message
    const [chatHistory, setChatHistory] = useState([]); // Store chat history

    // Handle sending messages
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            socket.emit('msgSend', message); // Send message to backend
            setMessage(''); // Clear input after sending
        }
    };

    // Listen for messages from the server
    useEffect(() => {
        socket.on('msgReceive', (msg, id) => {
            setChatHistory((prev) => [...prev, { msg, id }]);
        });

        // Cleanup the socket connection on component unmount
        return () => {
            socket.off('msgReceive');
        };
    }, []);

    return (<>
        <Link to='/' ><div className='chat-button1'>HOme</div></Link>
        <div className="chatbot-container">
            
            <div id="chatHistory" className="chat-history">
                {chatHistory.map((chat, index) => (
                    <p
                        key={index}
                        className={chat.id === socket.id ? 'myMessage' : 'otherMessage'}
                    >
                        {chat.msg}
                    </p>
                ))}
            </div>
            <form id="myForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="name"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
        </>
    );
};

export default Chat;
