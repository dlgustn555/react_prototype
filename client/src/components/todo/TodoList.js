import React from 'react'
import {useRecoilState, useRecoilValue} from 'recoil'
import {todosState, todoCountState} from '../../stores/TodoStore'

const TodoList = () => {
    const [todos] = useRecoilState(todosState)
    const total = useRecoilValue(todoCountState)
    return (
        <div>
            <p>총 {total}</p>
            {todos.map((todo, index) => (
                <div key={index}>{todo}</div>
            ))}
        </div>
    )
}

export default TodoList
