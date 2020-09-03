import React, { useEffect, useState, useRef } from 'react'
import io from 'socket.io-client'

const SocektIoClient = () => {
    const [sendMessage, setSendMessage] = useState('')
    const [messages, setMessages] = useState([])
    const socketRef = useRef(null)

    const handleSendMessage = ({ target }) => {
        setSendMessage(target.value)
    }

    const handleSendMessageButton = () => {
        socketRef.current.emit('message', sendMessage)
        setSendMessage('')
    }

    useEffect(() => {
        const socket = io('http://localhost:4400', {
            reconnection: false,
        })

        socketRef.current = socket
        socket.on('message', (message) => {
            setMessages((preMessges) => [...preMessges, message])
        })
    }, [])

    return (
        <div style={{ border: '1px solid silver', marginBottom: '10px' }}>
            <h3>♣ Socket Io Client ♣</h3>
            <input
                type="text"
                value={sendMessage}
                onChange={handleSendMessage}
            />
            <button onClick={handleSendMessageButton}>전송</button>
            <br />
            <p>메시지 리스트...{messages.length}</p>
            <ul>
                {messages.map((msg, key) => (
                    <li key={key}>{msg}</li>
                ))}
            </ul>
        </div>
    )
}

export default SocektIoClient
