import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {
  BrowserRouter as 
  Router,
  Switch,
  Route
} from "react-router-dom";
import ProtectedRoute from './utilities/ProtectedRoute'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Playlist from './pages/Playlist/Playlist';

// let token = localStorage.getItem('token')

ReactDOM.render(
     <Router>
         <Switch>
                <Route path="/login" component={Login} />

                <ProtectedRoute  exact path="/" component={Home}/>
                <ProtectedRoute  exact path="/playlist/:id" component={Playlist}/>
         </Switch>
     </Router>,
  document.getElementById('root')
);