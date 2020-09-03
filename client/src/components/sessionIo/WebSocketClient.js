import React, { useEffect, useState, useRef } from 'react'

const WebSocketClient = () => {
    const [sendMessage, setSendMessage] = useState('')
    const [messages, setMessages] = useState([])
    const wsRef = useRef(null)

    const handleSendMessage = ({ target }) => {
        setSendMessage(target.value)
    }

    const handleSendMessageButton = () => {
        wsRef.current.send(
            JSON.stringify({
                event: 'request',
                message: sendMessage,
            })
        )

        setSendMessage('')
    }

    const connectWebSocket = () => {
        const ws = new WebSocket('ws://localhost:4300')
        wsRef.current = ws

        ws.onopen = () => {
            let sendData = { event: 'open' }
            ws.send(JSON.stringify(sendData))
        }

        ws.onmessage = ({ data }) => {
            console.log(data)
            const { message } = JSON.parse(data)
            setMessages((preMessages) => [...preMessages, message])
        }
    }

    useEffect(() => {
        connectWebSocket()
    }, [])

    return (
        <div style={{ border: '1px solid silver', marginBottom: '10px' }}>
            <h3>♣ WebSocket ♣</h3>
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

export default WebSocketClient
