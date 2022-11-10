import './HeaderAction.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { BellIcon, ForkedIcon, StarIcon } from '../UI/Icon';

const HeaderAction = () => {
    return (
        <React.Fragment>
            <ul className='header-actions'>
                <li className='head-action-item cursor'>
                    <BellIcon />
                    <Link to={'/notification'} className="head-action-item-link">Notifications</Link></li>
                <li className='head-action-item cursor'>
                    <StarIcon />
                    <Link to={'/star'} className="head-action-item-link">
                        Star</Link>
                    <span className="count">35.3k</span>
                </li>
                <li className='head-action-item cursor'>
                    <ForkedIcon />
                    <Link to={'/fork'} className="head-action-item-link">Fork</Link>
                    <span className="count cursor">35.3k</span>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default HeaderAction;