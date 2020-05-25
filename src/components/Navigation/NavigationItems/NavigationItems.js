import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        { !props.loggedIn ?
        <NavigationItem link="/" exact>Dashboard</NavigationItem>
        :
        <NavigationItem link="/" exact>{props.username}'s Dashboard</NavigationItem>
        }
        {!props.loggedIn ?
        <NavigationItem link="/auth">Login</NavigationItem>
        :
        <NavigationItem link="/logout">Logout</NavigationItem>
        }
        < NavigationItem link="/cart"><i className="fa fa-shopping-cart"></i></NavigationItem>
    </ul>
);

export default navigationItems;