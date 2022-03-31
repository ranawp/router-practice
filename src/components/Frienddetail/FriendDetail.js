import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // console.log(props)


    const { friendId } = useParams();
    const [friend, setFriend] = useState({});


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${friendId}`
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [])
    return (
        <div>
            <p>This is freind detail page {friendId}</p>
            <p>Title:{friend.title}</p>
            <p>Body:{friend.body}</p>
        </div>
    );
};

export default FriendDetail;