import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h4>Users profile: {users.length}</h4>
            {
                users.map(user => <CustomLink
                    key={user.id}
                    to={`/users/${user.id}`}
                >{user.id}</CustomLink>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Users;