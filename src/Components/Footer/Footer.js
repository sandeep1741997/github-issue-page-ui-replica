import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { MarkGithubIcon } from '../UI/Icon';

const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <div className='footer'>
                    <Link>Terms</Link>
                    <Link>Privacy</Link>
                    <Link>Security</Link>
                    <Link>Status</Link>
                    <Link>Docs</Link>
                    <div>
                        <Link>
                            <MarkGithubIcon />
                        </Link>
                    </div>
                    <div>
                        <Link>Contact Github</Link>
                    </div>
                    <Link>Pricing</Link>
                    <Link>API</Link>
                    <Link>Training</Link>
                    <Link>Blog</Link>
                    <Link>About</Link>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;