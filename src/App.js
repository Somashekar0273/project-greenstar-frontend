import React, { Component } from 'react';
import logo from './logo.svg';
import { bubble as Menu } from 'react-burger-menu';
import './Common.css';
import './App.css';
import headerLogo from './logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
//import 'react-animated-slider/build/vertical.css';
import './slider-animations.css';

///////////////////
// App           //
///////////////////
class App extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  render() {  
    const {header,main,footer} = this.props;
    const content = [
      {
        title: 'Green Star Application',
        description:
        ' The Green Start Application helps to address three major problems of school: Attendance, Homework and Discipline'
       /* button: 'Read More',
        user: 'Outreach'*/
      },
      {
        title: 'Attendance',
        description:
        'Schools have poor attendance and no strict attendance tracking mechanisms, resulting in higher dropout rates.'
        /*button: 'Read More',
        user: 'Outreach'*/
      },
      {
        title: 'Home Work',
        description:
        'Majority of students in govt. schools do not have a formal homework structure which discourages them to learn at home.'
        /*button: 'Read More',
        user: 'Outreach'
        */
      },
      {
        title: 'Discipline',
        description:
        'No focus provided on behavioral changes as most of the items are provided by the govt. ' +
        'These problems are transferred into measurable parameters and stars are awarded.'
        /*button: 'Read More',
        user: 'Outreach'*/
      }
    ];
      return (
        <div className="app">
        <header className="header-logo">
          <img src={headerLogo} alt="logo" />
          <span className="logout" align="right">
          <a href="/Login">Logout</a>
          </span>
      </header>

        <main className="main">
          <span className="home">Home</span>
          <Slider className="slider">
          {content.map((item, index) => (
              <div
                key={index}
                className="slider-content">
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p className="para">{item.description}</p>
                </div>
              </div>
            ))} 
          </Slider>
          <span>
            <Menu width={ 200 } disableCloseOnEsc>
              <a id="dashboard" className="menu-item" href="/Dashboard">Dashboard</a>
              <a id="report" className="menu-item" href="/Report">Report</a>
              <a id="explore" className="menu-item" href="/GroupList">Explore</a>
            </Menu>
          </span>
        </main>
        <footer className="footer">
            <span className="footer-span"> @Copyright; version:1.0</span>
            <span className="footer-link" >
            <a id="about" href="/About">About</a>
            </span>
            <span className="footer-link">
            <a id="contact"  href="/Contact">Contact</a>
            </span>
        </footer>
      </div>   
      );
  }
}

export default App;