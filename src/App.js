import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from "react-router-dom";
import Layout from './hoc/Layout/Layout';
import Auth from "./containers/Auth/Auth";
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Admin from './components/Admin';
import Mobile from "./components/Mobile";
import MobileDetail from "./components/MobileDetail";


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
     <Route path="/detail" component={MobileDetail} />
     <Route path="/" component={Mobile} /> 
     </Switch>
     </Layout>
    );
  }
}

export default App;
