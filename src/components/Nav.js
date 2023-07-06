// Navbar for each page

import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav id='main-nav'>
            <Link to="/" className="nav-button">Home</Link>

            <a href="/resume.pdf" className='nav-button' target="_blank" rel='noopenerr noreferrer'>
                Resume
            </a>
            <a href="https://github.com/Jon-H03/" className='nav-button' target="_blank" rel='noopenerr noreferrer'>
                GitHub
            </a>
        </nav>
    )
}

export default Nav;