import React, {Component} from 'react';
//import { Button, Input , Checkbox} from 'antd';
import ReactDOM from 'react-dom';
import App from './App';
import './Common.css';
import './App.css';
//import styles from './styles.scss';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
/*import {
    AppRegistry,
    Text,
    Image,
    View,
    StyleSheet,
    TextInput,
    Linking,
    Alert
  } from 'react-native';*/
//import { gql, graphql } from 'react-apollo';
//import gql from 'graphql-tag';
//import { graphql } from 'react-apollo';
import './Login.css';
import logo from './logo.svg';
import headerLogo from './logo.jpg';
//import { Redirect } from 'react-router-dom';
//import { withRouter, Link} from 'react-router-dom';
//import {Router, Route, hashHistory} from "react-router";
//import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';

function validate(email, password) {
    // we are going to store errors for all fields
    // in a signle array
    //alert(email);
    const errors = [];
    if(email === '' || email === "undefined"){
        //alert('111111');
        errors.push("Email cannot be empty");
    } else {
        //alert('22222');
        if (email.length < 5) {
            errors.push("Email should be at least 5 charcters long");
        }
        if (email.split("").filter(x => x === "@").length !== 1) {
            errors.push("Email should contain a '@' symbol");
        }
        if (email.indexOf(".") === -1) {
            errors.push("Email should contain at least one dot");
        }
        if (password.length < 6) {
            errors.push("Password should be at least 6 characters long");
        }
    }
    return errors;
  }

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: []
          };
        this.onChange = this.onChange.bind(this);
    }

    
    onChange = (e) => {
        if (e.target.name === 'isAdmin') {
            this.setState({
                [e.target.name]: e.target.checked,
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }
    }

    onSubmit = async () => {
        const { email, password} = this.state;
        const errors = validate(email, password);
       // this.props.onChange(this.state.email);
       //alert(errors);
        //alert(errors.length);
        if (errors.length > 0) {
           // alert('inside erross 21121');
            this.setState({ errors });
            return;
        } else {
            //alert('Inside else condition');
            window.location = './App';
          }
    }

    render() {
        const { errors } = this.state;
        const {header,main,footer} = this.props;
        const email = this.state.email;  
        const password = this.state.password;  
        return (
            <div className="app">
                 <header className="header-logo" >
                 <img src={headerLogo} alt="logo" />
                </header>
                <main className="login-main">
                <p>
                            <img src={logo} className="App-logo" alt="logo" /> 
                        </p>
                    <Container> 
                        
                        <p>
                            {errors.map(error => (
                                <p key={error} className="errorText">Error: {error}</p>
                            ))}

                            <Input ref="email" className="inputText"  name="email" placeholder="Email" 
                            onChange={e => this.onChange(e)} 
                            value={email} />
                            <br/>
                            <Input ref="password"  name="password" placeholder="Password" 
                            type="password"
                            onChange={e => this.onChange(e)} 
                            value={password} />
                        
                        <br />
                        <Button onClick={() => this.onSubmit()} onKeyPress={() => this.onSubmit()} type="primary">Login</Button>
                    </p>
                    </Container> 
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

//const mutation = gql`
//mutation($username: String!, $password: String!, $isAdmin: Boolean){
   // login(email: $email, password: $password, isAdmin: $isAdmin) {
    //    token
    //    refreshToken
    //}
//}
//`;

export default Login;
