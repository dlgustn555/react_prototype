import React from 'react'
import Icon from '../assets/IconSVG'

const LazyIcon = () => {
    return (
        <div>
            <p>
                <a href="https://github.com/dlgustn555/react_prototype/issues/15">
                    react_prototype#15 [client] 이미지 아이콘 lazy
                </a>
            </p>
            <div>
                <Icon
                    name="BiDbStock"
                    width={21}
                    height={26}
                    style={{verticalAlign: 'top'}}
                />
                <Icon
                    name="BiDbStock_TEST"
                    width={21}
                    height={26}
                    style={{verticalAlign: 'top'}}
                />
            </div>
        </div>
    )
}

export default LazyIcon
