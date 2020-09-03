import axios from 'axios'

export const createSessionIoStore = () => {
    return {
        name: 'SessionIoStore',

        async getSessionIoInfo() {
            const { data } = await axios.post('/api/session-io')
            return data.code === '00' ? data.result.url : ''
        },

        sendMessage(message) {
            axios.post('/api/session-io/send', { message })
        },
    }
}
