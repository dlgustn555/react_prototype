import {atom, selector} from 'recoil'

export const todosState = atom({
    key: 'todosState',
    default: []
})

export const textState = atom({
    key: 'textState',
    default: ''
})

export const todoCountState = selector({
    key: 'todoCountState',
    get: ({get}) => {
        const todos = get(todosState)
        return todos.length
    }
})
