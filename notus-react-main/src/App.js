import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Chat from "views/Chat.js";
import Index from "views/Index.js";


export default function App() {
  return (
    <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/chat" exact component={Chat} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
  )
}
