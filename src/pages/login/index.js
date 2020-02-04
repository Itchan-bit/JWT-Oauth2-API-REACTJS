import React , {Component} from 'react';
import { Container, Card,
     Form , FormGroup, 
     Label , Input, Button } from 'reactstrap';

import axios from 'axios'
import '../../assets/styles/login.css';

class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            message: ''
        }

        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

     login = event => {
        event.preventDefault();
        const username = 'itchan'
        const password = 'itchan123'
        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
        
        const base_url = 'http://localhost:8083/oauth/token';

        const queryString = require('query-string');

        const data = queryString.stringify({
            username:  this.state.email, 
            password: this.state.password, 
            grant_type: 'password'
        })

        const instance = axios.create({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'basic '+ token
                },
              });
        instance.post(base_url,data).then(res => {
            console.log(res);
            
        })
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    componentDidMount = () => {
        localStorage.clear();
    }

    render(){
        return(
            <div className = "main">
                <Container className = "login-container">
                    <Card>
                        <Form className = "login-form">
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Your Username" onChange = {this.onChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Your Password" onChange =  {this.onChange} />
                        </FormGroup>
                        <Button color="primary" onClick = {this.login}>Login Here</Button>
                        </Form>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Login;