import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import styles from './UserItem.module.scss'
import Card from '../Card'

export default ({ id, name, image, placeCount }) => {
    return (
        <li className={styles.wrapper}>
            <Card>
                <Link to={`/places/${id}/places`} className={styles.content}>
                    <div className={styles.userImage} >
                        <Avatar src={image} alt={name} />
                    </div>
                    <div className={styles.info}>
                        <h2>{name}</h2>
                        <h3>{placeCount} {placeCount === 1 ? 'Place' : 'Places'}</h3>
                    </div>
                </Link>
            </Card>
        </li>
    )
}

