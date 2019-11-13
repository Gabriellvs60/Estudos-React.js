import React from 'react';
import './Header.css';

//Elements
import { IconButton } from '@material-ui/core';
//Material Icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <div className="account"></div>
                <p>Joaquim Tavares</p>
                <IconButton className="user-info">
                    <AccountCircleIcon className="button-account"/>
                </IconButton>
            </div>
        </header>
    )
}

export default Header