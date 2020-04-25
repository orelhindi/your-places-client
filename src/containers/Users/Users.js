import React from 'react'
import UsersList from '../../components/UsersList'
import DefaultUser from '../../assets/images/default-user-icon.png'

export default () => {
    const users = [
        {
            id: 1,
            image: DefaultUser,
            name: 'user1',
            places: 10
        },
        {
            id: 2,
            image: DefaultUser,
            name: 'user2',
            places: 10
        },
        {
            id: 3,
            image: DefaultUser,
            name: 'user3',
            places: 10
        },
    ]
    return (
        <UsersList users={users}/>
    )
}

