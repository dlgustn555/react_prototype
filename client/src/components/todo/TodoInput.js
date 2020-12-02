import React from 'react'
import {useRecoilState} from 'recoil'

import {todosState, textState} from '../../stores/TodoStore'

const TodoInput = () => {
    const [todos, setTodos] = useRecoilState(todosState)
    const [text, setText] = useRecoilState(textState)

    const handleChageText = ({currentTarget}) => {
        const text = currentTarget.value
        setText(text)
    }

    const handleAddTodo = () => {
        setTodos([...todos, text])
        setText('')
    }

    const handleKeyUp = ({keyCode}) => {
        if (keyCode === 13) {
            handleAddTodo()
        }
    }

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={handleChageText}
                onKeyUp={handleKeyUp}
            />
            <button onClick={handleAddTodo}>등록</button>
        </div>
    )
}

export default TodoInput
