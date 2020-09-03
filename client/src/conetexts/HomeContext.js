import React, { createContext, useContext } from 'react'
import { useLocalStore } from 'mobx-react-lite'
import { createHomeStore } from '../stores/HomeStore'

const homeContext = createContext()
const { Provider } = homeContext

export const HomeProvider = ({ children }) => {
    const store = useLocalStore(createHomeStore)
    return <Provider value={store}>{children}</Provider>
}

export const useHomeSotre = () => {
    return useContext(homeContext)
}
