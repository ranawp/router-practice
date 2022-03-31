import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = (props) => {
    console.log(props)
    const { userId } = useParams();
    const [user, setUser] = useState([])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [userId])
    return (
        <div>
            <h4>This is user detail:{userId}</h4>
            <h5>{user.name}</h5>
            <p>{user.email}</p>

        </div>
    );
};

export default UserDetails;