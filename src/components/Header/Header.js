import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>welcome to our header.....  </h1>
            <nav>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/friends'>Friends</CustomLink>
                <CustomLink to="/users">Users</CustomLink>
                <CustomLink to="/countries">Countries</CustomLink>
                <CustomLink to='/about'>About</CustomLink>

            </nav>
        </div>
    );
};

export default Header;