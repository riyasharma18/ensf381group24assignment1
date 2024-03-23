import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">Logo</div>
            <div className="company-name">Company Name</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;