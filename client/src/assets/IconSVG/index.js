import React, {lazy} from 'react'

export default ({name = '', width, height, style = {}}) => {
    const IconComponent = lazy(() =>
        Promise.resolve(import(`./${name}`)).catch(() => ({
            default: () => <div>ERROR</div>,
        }))
    )

    const IconComponent2 = lazy(() =>
        Promise.resolve({
            default: () => '신기하다',
        })
    )

    return (
        <div>
            <IconComponent width={width} height={height} style={style} />
            <IconComponent2 />
        </div>
    )
}
