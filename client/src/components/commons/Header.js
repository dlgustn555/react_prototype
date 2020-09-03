import React from 'react'

const ISSUES_RUL = 'https://github.com/dlgustn555/react_prototype/issues/'

const Header = ({ number, title }) => {
    return (
        <h2>
            <a href={`${ISSUES_RUL}${number}`} target="_blank">
                {title}
            </a>
        </h2>
    )
}

export default Header
