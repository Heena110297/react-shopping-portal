import React, { Component } from 'react';

import Aux from '../Auxillary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Aux>
                <Toolbar
                loggedIn={this.props.loggedIn}
                username={this.props.username}
                 drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    loggedIn = {this.props.loggedIn}
                    username={this.props.username}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

const mapStateToProps =state =>{
    return{
        username: state.auth.username,
        loggedIn:state.auth.loggedIn
    }
}

export default connect(mapStateToProps)(Layout);