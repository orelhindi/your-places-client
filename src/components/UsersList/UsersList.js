import React from 'react'
import styles from './UsersList.module.scss'
import UserItem from '../UserItem'

export default ({
    users,
}) => {
    return (
        !users.length
            ? <div>No users found</div>
            : <ul>
                {users.map(({ id, image, name, places }) =>
                    <UserItem
                        key={id}
                        id={id}
                        image={image}
                        name={name}
                        placeCount={places}
                    />
                )}
            </ul>
    )
}

