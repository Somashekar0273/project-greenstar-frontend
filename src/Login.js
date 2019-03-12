import React, {Component} from 'react';
import { Button, Input } from 'reactstrap';

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
        //const {header,main,footer} = this.props;
        const email = this.state.email;  
        const password = this.state.password;  
        return (
            <div>
                <tr className="app">
                    <td>
                        {errors.map(error => (
                            <p key={error} className="errorText">Error: {error}</p>
                        ))}
                    </td>&nbsp;&nbsp;&nbsp;
                    <td>
                        <Input ref="email" name="email" placeholder="Email" 
                        onChange={e => this.onChange(e)} 
                        value={email} />
                    </td>&nbsp;&nbsp;&nbsp;
                    <td>
                        <Input ref="password"  name="password" placeholder="Password" 
                        type="password"
                        onChange={e => this.onChange(e)} 
                        value={password} />
                    </td>&nbsp;&nbsp;&nbsp;
                    <td>
                        <Button onClick={() => this.onSubmit()} onKeyPress={() => this.onSubmit()} type="primary">Login</Button>
                    </td>
                </tr>
            </div>
        );
    }
}
export default Login;
