import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Dashboard</NavigationItem>
        <NavigationItem link="/auth">Login</NavigationItem>
        <NavigationItem link="/cart"><i className="fa fa-shopping-cart"></i></NavigationItem>
        
    </ul>
);

export default navigationItems;