import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router, Switch
} from "react-router-dom";
import {Dropdown, DropdownButton} from "react-bootstrap";
import Dashboard from "./Dashboard";
import headerLogo from './images/logo.jpg';
import OutReport from "./OutReport";
import GroupList from "./explore/GroupList";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import GroupEdit from "./explore/GroupEdit";
import "./cssstyles/Common.css";
class App extends Component {
  render (){
    return (
      <Router>
          <div>
            <img src={headerLogo} alt="logo" />
            <ul className="header">
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/dashboard">Dashboard</NavLink></li>
              <li><NavLink to="/outreport">Report</NavLink></li>
              <li><DropdownButton className="button" title="EXPLORE">
                    <Dropdown.Item className="item" href="/about">Student</Dropdown.Item>
                    <Dropdown.Item className="item" href="/groups">Group</Dropdown.Item>
                    <Dropdown.Item className="item" href="#/action-2">Section</Dropdown.Item>
                    <Dropdown.Item className="item" href="#/action-3">Class</Dropdown.Item>
                    <Dropdown.Item className="item" href="#/action-3">School</Dropdown.Item>
                  </DropdownButton></li>
            </ul>
            <div className="content">
              <Route exact path="/login" component={Login}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/outreport" component={OutReport}/>
              <Route path="/groups" component={GroupList}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path='/groups/:id' component={GroupEdit}/>
            </div>
            <ul className="footer"><span className="footer-span"> @Copyright; version:1.0</span>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
              </ul> 
          </div>
      </Router>
    );
  }
}
export default App;
