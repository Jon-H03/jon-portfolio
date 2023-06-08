import React from 'react';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Icons() {
    return(
        <>
            <div className="footer-icons">
                <Link to="mailto:jonathan.hirsch2011@gmail.com"><AiOutlineMail /></Link>
                <Link to="https://www.linkedin.com/in/jonathan-hirsch3/"><AiOutlineLinkedin /></Link>
                <Link to="https://github.com/Jon-H03/"><AiOutlineGithub /></Link>
            </div>
        </>
    )
}

export default Icons;