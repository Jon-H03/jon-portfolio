import React from 'react';

// Import components
import Nav from '../components/Nav';
import { Link } from 'react-router-dom'
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';


function HomePage() {
    return (
        <>  
            <header>
                <div className="main">
                    <Nav />
                    <h1>Jonathan Hirsch</h1>
                    <h6>
                        Hello there, I'm a post-baccalaureate Computer Science student from Oregon State University.
                        Feel free to reach me at my socials below! 
                    </h6>
                    <div className='header-icons'>
                        <Link to="mailto:jonathan.hirsch2011@gmail.com"><AiOutlineMail /></Link>
                        <Link to="https://www.linkedin.com/in/jonathan-hirsch3/"><AiOutlineLinkedin /></Link>
                        <Link to="https://github.com/Jon-H03/"><AiOutlineGithub /></Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HomePage;