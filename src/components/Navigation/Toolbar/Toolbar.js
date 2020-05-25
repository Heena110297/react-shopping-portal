import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <DrawerToggle/>
        <div >
           <h5 color="white"> Shopping Portal </h5>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems loggedIn={props.loggedIn} username={props.username}/>
        </nav>
    </header>
);

export default toolbar;