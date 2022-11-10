import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { BookIcon, CodeIcon, GitPullRequestIcon, GraphIcon, IssueOpenedIcon, PlayIcon, ShieldIcon, TableOccIcon } from '../UI/Icon';

const Navigation = () => {
    return (
        <React.Fragment>
            <ul className='navbar'>
                <li>
                    <Link to={'/code'} className='nav-item'>
                        <CodeIcon />
                        <span className='nav-text'>Code</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/issue'} className="nav-item">
                        <IssueOpenedIcon />
                        <span className='nav-text'>Issues</span>
                        <span>234</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/issue'} className="nav-item">
                        <GitPullRequestIcon />
                        <span className='nav-text'>Pull requests</span>
                        <span>234</span>
                    </Link>
                </li>

                <li>
                    <Link to={'/issue'} className="nav-item">
                        <PlayIcon />
                        <span className='nav-text'>Actions</span>
                        <span>234</span>
                    </Link>
                </li>

                <li>
                    <Link to={'/issue'} className="nav-item">
                        <TableOccIcon />
                        <span className='nav-text'>Projects</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/issue'} className="nav-item">
                        <BookIcon />
                        <span className='nav-text'>Wiki</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/issue'} className="nav-item">
                        <ShieldIcon />
                        <span className='nav-text'>Security</span>
                    </Link>
                </li>
                <li>
                    <Link to={'/issue'} className="nav-item">
                        <GraphIcon />
                        <span className='nav-text'>Insights</span>
                    </Link>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default Navigation;