import React from 'react';
import classNames from 'classnames'

import './Card.scss';

export default ({ className, children }) => {
    return (
        <div className={classNames('card', className)}>
            {children}
        </div>
    );
};
