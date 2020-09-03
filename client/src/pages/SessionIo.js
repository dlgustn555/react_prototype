import React from 'react'

import Header from '../components/commons/Header'
import WebSocketClient from '../components/sessionIo/WebSocketClient'
import SocektIoClient from '../components/sessionIo/SocektIoClient'
import SessionIoClient from '../components/sessionIo/SessionIoClient'

/**
 * 파스타 > session-io 적용
 * https://github.com/dlgustn555/react_prototype/issues/14
 */
const SessionIo = () => {
    return (
        <>
            <Header number={14} title="Session-Io" />
            {/* <WebSocketClient />
            <SocektIoClient /> */}
            <SessionIoClient />
        </>
    )
}

export default SessionIo
