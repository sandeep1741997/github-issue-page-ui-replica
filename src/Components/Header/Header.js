import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import HeaderAction from './HeaderAction';
import Navigation from './Navigation';
import { TableIcon } from '../UI/Icon';

const Header = () => {
    return (
        <React.Fragment>
            <div className='header'>
                <div className='header-main-actions'>
                    <div className='header-action'>
                        <TableIcon />
                        <span>
                            <Link to={"/facebook"} className="header-link">facebook</Link></span>
                        <span>/</span>
                        <strong><Link to={'/react'} className="header-link"> react</Link></strong>
                        <span className='Label Label--secondary '>Public</span>
                    </div>
                    {/*Used Header action component */}
                    <HeaderAction />
                </div>
                {/*Used here Navigation component */}
                <Navigation />
            </div>
        </React.Fragment>
    );
};

export default Header;