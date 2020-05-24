import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import "./App.css";
import Mobile from "./components/Mobile";
import MobileDetail from "./components/MobileDetail";
import Auth from './containers/Auth/Auth';
import Cart  from './components/Cart/Cart';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path ="/cart" component={Cart}/>
          <Route path="/detail" component={MobileDetail} />
          <Route path="/" component={Mobile} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
