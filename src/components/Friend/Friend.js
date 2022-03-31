import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    // console.log(props.friend)
    const navigate = useNavigate();
    const { title, body, id } = props.friend
    const showFriendDetail = () => {
        const path = `/friend/${id}`
        navigate(path)
        // navigate('/friends/' + id)
    }

    return (
        <div>
            <h2>Name: {title}</h2>
            <p>Body:{body}</p>
            <button onClick={showFriendDetail}>User Id:{id} </button>
        </div>
    );
};

export default Friend;