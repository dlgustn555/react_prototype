import React, { createContext, useContext } from 'react'
import { useLocalStore } from 'mobx-react-lite'

import { createSessionIoStore } from '../stores/SessionIoStore'

const sessionIoContext = createContext()
const { Provider } = sessionIoContext

export const SessionIoProvider = ({ children }) => {
    const store = useLocalStore(createSessionIoStore)
    return <Provider value={store}>{children}</Provider>
}

export const useSessionIoSotre = () => {
    return useContext(sessionIoContext)
}
