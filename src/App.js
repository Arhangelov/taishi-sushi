import "./App.css";

import {useEffect} from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import HomePage from "./component/Pages/HomePage/HomePage";
import Form from "./component/Pages/AddPage/Form";
import LoginPage from "./component/Pages/LoginPage/LoginPage";
import RegisterPage from "./component/Pages/RegisterPage/RegisterPage";
import { auth } from "./utils/firebase";
import firebase from 'firebase/app';

function App() {

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("Logged In:");
        console.log(user);
      } else {
        console.log("Logged Out:");
      }
    });
  }, []);

  return (
    <div name="App">
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/add" component={Form} exact />
        <Route
          path="/logout"
          render={(props) => {
            auth.signOut();
            return <Redirect to="/" />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
