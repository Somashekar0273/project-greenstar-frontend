import React, {Component} from 'react';
import { Button, Input , Checkbox} from 'antd';
import ReactDOM from 'react-dom';
import { bubble as Menu } from 'react-burger-menu';
import './Common.css';
import './App.css';
import headerLogo from './logo.jpg';
import Star from './star.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends Component {
    
    render() {
        const {header,main,footer} = this.props;
        return (
        <div className="app">
            <header className="header-logo">
                <img src={headerLogo} alt="logo" />
                <span className="logout">
                <a   href="/Login">Logout</a>
                </span>
            </header>
            <main className="main">
                <span className="dashboard">Dashboard</span>
                <span>
                <Menu width={ 200 }>
                    <a id="home" className="menu-item" href="/App">Home</a>
                    <a id="report" className="menu-item" href="/Report">Report</a>
                    <a id="explore" className="menu-item" href="/GroupList">Explore</a>
                    </Menu>
                  </span>  
                <span> 
                    <Star/>
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

export default Dashboard;
