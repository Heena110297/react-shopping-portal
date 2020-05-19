import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
import Layout from './hoc/Layout/Layout';
import Auth from "./containers/Auth/Auth";
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
       <Layout>
         <Switch>
           <Route path="/" component={Auth} />
         </Switch>
         </Layout>
     </div>
    );
  }
}

export default App;
