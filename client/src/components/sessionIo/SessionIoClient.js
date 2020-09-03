import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import io from 'socket.io-client'

import { useSessionIoSotre } from '../../conetexts/SessionIoContext'

const SessionIoClient = () => {
    const { getSessionIoInfo, sendMessage } = useSessionIoSotre()
    const socketRef = useRef(null)
    const [messages, setMessages] = useState([])
    const [text, setText] = useState('')

    const handleSendMessage = ({ target }) => {
        setText(target.value)
    }

    const handleSendMessageButton = () => {
        sendMessage(text)
        setText('')
    }

    useEffect(() => {
        getSessionIoInfo().then((url) => {
            socketRef.current = io(url, {
                reconnection: false,
                transports: ['websocket'],
            })

            socketRef.current.on('connect', () => {
                setMessages(['Connect Success!!!'])
            })

            socketRef.current.on('nchat:channel', function (data) {
                console.log('eeee', data)
            })

            socketRef.current.emit('nchat:channel', {
                command: 'subscribe',
                name: { channels: ['dlgustn555-sessionio'] },
            })

            socketRef.current.on('send', (message) => {
                setMessages((prev) => [...prev, message])
            })
        })
    }, [])

    return (
        <div style={{ border: '1px solid silver', marginBottom: '10px' }}>
            <h3>♣ SessionIoClient (Paster Session Io) ♣</h3>
            <input type="text" value={text} onChange={handleSendMessage} />
            <button onClick={handleSendMessageButton}>전송</button>

            <ul>
                {messages.map((message, key) => (
                    <li key={key}>{message}</li>
                ))}
            </ul>
        </div>
    )
}

export default SessionIoClient
