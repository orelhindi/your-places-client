import React from 'react'
import './Avatar.scss'
import classNames from 'classnames'

export default ({ src, alt, className }) => {
    return (
        <div className={classNames('avatar-wrapper', className)}>
            <img
                src={src}
                alt={alt}
            />
        </div>
    )
}

