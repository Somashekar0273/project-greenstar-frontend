import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import About from './About';
import Contact from './Contact';
import Report from './Report';
import Dashboard from './Dashboard';
import GroupList from './GroupList';
import GroupEdit from './GroupEdit';
import * as serviceWorker from './serviceWorker';

var baseURI = document.getElementById('root').baseURI;
//alert(baseURI);
if(baseURI.includes("App")){
    ReactDOM.render(<App/>, document.getElementById('root'));
} else if(baseURI.includes("About")){
    ReactDOM.render(<About/>, document.getElementById('root'));
} else if(baseURI.includes("Contact")){
    ReactDOM.render(<Contact/>, document.getElementById('root'));
} else if(baseURI.includes("Report")){
    ReactDOM.render(<Report/>, document.getElementById('root'));
} else if(baseURI.includes("Dashboard")){
    ReactDOM.render(<Dashboard/>, document.getElementById('root'));
} else if(baseURI.includes("GroupList")){
    ReactDOM.render(<GroupList/>, document.getElementById('root'));
} else if(baseURI.includes("GroupEdit")){
    ReactDOM.render(<GroupEdit/>, document.getElementById('root'));
}else {
    ReactDOM.render(<Login/>, document.getElementById('root'));
}

//ReactDOM.render(<App />, document.getElementById('App'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
