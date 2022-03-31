import React, { useEffect, useState } from 'react'; import Friend from '../Friend/Friend';

const Friends = () => {
    const [friendsPost, setFriendsPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setFriendsPost(data))
    }, [])
    return (
        <div>
            <h2>Hello Friends.How are you</h2>
            {
                // friendsPost.map(friendsPost => <Friend key={friendsPost.id} singleFriendPost={friendsPost}></Friend>)

                friendsPost.map(friend => <Friend friend={friend}></Friend>)


            }


        </div>
    );
};

export default Friends;