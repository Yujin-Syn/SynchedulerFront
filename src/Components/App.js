import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Layout from "./Layout";

import Signin from "../pages/signin";
import Signup from "../pages/signup";

// test
//import { MyComponent } from '../Spreadsheet/Spreadsheet';

// todo 
const Error = () => "Error";

export default function App() {
  var isAuthenticated = true;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/projects"/>} />
        <Route exact path="/app" render={() => <Redirect to="/app/projects" />} />
        <PublicRoute path="/signin" component={Signin} />
        <PublicRoute path="/signup" component={Signup} />
        <PrivateRoute path="/app" component={Layout} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route 
        {...rest}
        render={props => 
          isAuthenticated ? 
            (React.createElement(component, props)) : 
            (<Redirect to={{pathname: "/signin", state: {from: props.location,},}} />)}
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route 
      {...rest}
      render={props => 
        isAuthenticated ? 
          (<Redirect to={{pathname: "/",}} />) :
          (React.createElement(component, props))}
      />
    );
  }
}