import React from 'react'
import {RecoilRoot, atom, selector, useRecoilState, useRecoilValue} from 'recoil'

import TodoInput from '../components/todo/TodoInput'
import TodoList from '../components/todo/TodoList'

const Recoil = () => {
    return (
        <RecoilRoot>
            <TodoInput />
            <TodoList />
        </RecoilRoot>
    )
}

export default Recoil
