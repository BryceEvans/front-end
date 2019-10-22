import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import BucketLists from './dashboard/BucketLists';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/registration" component={Registration}/>
      <PrivateRoute exact path="/bucketlists" component={BucketLists} />
    </div>
  );
}

export default App;
