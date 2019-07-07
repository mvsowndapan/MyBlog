import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//store
import { Provider } from 'react-redux';
import store from './store';

import jwt_decode from 'jwt-decode';//jwt-decode fro checking the user is logged in
import setAuthToken from './utils/setAuthToken';//to get current user token from local storage
//to get current user details and to redirect user to same page if he had a token when refreshing
//actions
import { setCurrentUser, logoutUser } from './actions/authAction';

//css
import './App.css';
//compoent
//layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
//auth
import Login from './components/auth/Login';
import Register from './components/auth/Register';


//to prevent data to be refeshed
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  let decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </div>
            <Footer />
          </div>
        </Router >
      </Provider>
    );
  }
}

export default App;
