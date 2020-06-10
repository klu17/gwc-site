import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Resources from "./components/Resources";
import Calendar from "./components/Calendar";
import AboutUs from "./components/AboutUs";

class App extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Girls Who Code | Grove Hall</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/signUp">Sign Up</NavLink></li>
                    <li><NavLink to="/resources">Resources</NavLink></li>
                    <li><NavLink to="/calendar">Calendar</NavLink></li>
                    <li><NavLink to="/aboutUs">About Us</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/signUp" component={SignUp}/>
                    <Route path="/resources" component={Resources}/>
                    <Route path="/calendar" component={Calendar}/>
                    <Route path="/aboutUs" component={AboutUs}/>
                </div>
            </div>
            </HashRouter>
        );
    }
}
export default App;

