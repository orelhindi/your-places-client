import React from 'react'
import styles from './UserItem.module.scss'
import Avatar from '../Avatar/Avatar'

export default ({ name, image, placeCount }) => {
    return (
        <li className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.userImage} >
                    <Avatar src={image} alt={name} />
                </div>
                <div className={styles.info}>
                    <h2>{name}</h2>
                    <h3>{placeCount} {placeCount === 1 ? 'Place' : 'Places'}</h3>
                </div>
            </div>
        </li>
    )
}

