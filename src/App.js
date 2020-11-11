
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // useHistory
} from "react-router-dom";
import {
  connect,
  useSelector
} from 'react-redux'
import './App.css'

import Header from './components/Layouts/Header';
import HeaderPublic from './components/Layouts/HeaderPublic';
import Login from './containers/auth';
import Dashboard from './containers/dashboard';
import ListProducts from './containers/products';
import Orders from './containers/orders';
import Loader from './components/loader';


function App() {
  const isLoading = useSelector(state => state.isLoading)
  const userLogin = useSelector(state => state.userLogin)

  return (
    <Router>
      {isLoading && <Loader />}
      {userLogin && <Header /> }
      {!userLogin && <HeaderPublic />}
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact> <Login /> </Route>
          <Route path="/login"> <Login /> </Route>
          <Route path="/dashboard" exact> <Dashboard /> </Route>
          <Route path="/products" exact> <ListProducts /> </Route>
          <Route path="/orders" exact> <Orders /> </Route>
        </Switch>
      </div>
    </Router>
  );
}


// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUser (payload) {
//       dispatch(setUser(payload))
//     }
//   }
// }

export default connect()(App);
