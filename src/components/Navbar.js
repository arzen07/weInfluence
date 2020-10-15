import React from 'react';
import { Link } from 'react-router-dom';
import { SIGN_IN, SIGN_UP } from '../core/constants';
import './Navbar.css';
const Nav = () => {
    const navStyle={
        color:'white'
    }
    return (
        <nav >
            <h3> We Influence</h3>
            <ul className="nav-links">
                <Link style={navStyle} to={SIGN_IN}>
                    <li>Sign in</li>
                </Link>
                <Link style={navStyle} to={SIGN_UP}>
                    <li>Sign Up</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;