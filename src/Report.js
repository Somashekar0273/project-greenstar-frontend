import React, {Component} from 'react';
import { Button, Input , Checkbox} from 'antd';
import ReactDOM from 'react-dom';
import { bubble as Menu } from 'react-burger-menu';
import './Common.css';
import './App.css';
import './table-twbs.css';
import headerLogo from './logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

var DataTable = require('react-data-components').DataTable;

// Generate random data
var names = [ 'Carlos', 'Juan', 'Jesus', 'Alberto', 'John' ];
var cities = [ 'Chicago', 'Tampico', 'San Francisco', 'Mexico City', 'Boston', 'New York' ];
var addresses = [ '333 West Wacker Drive', '1931 Insurgentes Sur', '1 Lombard Street', '55 Av Hidalgo'];

var data = [];
for (var i = 0; i < 100; i++) {
  data.push({
    id: i,
    name: names[~~(Math.random() * names.length)],
    city: cities[~~(Math.random() * cities.length)],
    address: addresses[~~(Math.random() * addresses.length)]
  });
}

var columns = [
  { title: 'Name', prop: 'name'  },
  { title: 'City', prop: 'city' },
  { title: 'Address', prop: 'address' }
];

class Report extends Component {
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
                <span className="report">Report</span>
                <span>
                    <Menu width={ 200 }>
                        <a id="home" className="menu-item" href="/App">Home</a>
                        <a id="dashboard" className="menu-item" href="/Dashboard">Dashboard</a>
                        <a id="explore" className="menu-item" href="/GroupList">Explore</a>
                    </Menu>
                  </span>  
                    <DataTable
                        keys="name"
                        columns={columns}
                        initialData={data}
                        initialPageLength={5}
                        initialSortBy={{ prop: 'city', order: 'descending' }}
                        pageLengthOptions={[ 5, 20, 50 ]}
                    />
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

export default Report;