import React from 'react'
import UsersList from '../../components/UsersList'
import DefaultUser from '../../assets/images/default-user-icon.png'

export default () => {
    const users = [
        {
            id: 1,
            image: DefaultUser,
            name: 'Orel Hindi',
            places: 10
        },
        {
            id: 2,
            image: DefaultUser,
            name: 'Orel Hindi',
            places: 10
        },
        {
            id: 3,
            image: DefaultUser,
            name: 'Orel Hindi',
            places: 10
        },
    ]
    return (
        <UsersList users={users}/>
    )
}

