import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import "./style.css";

function Login(props) {
    return (
        <div id="loginContainer">
            <div id="loginBox">
                <h4>Login</h4>
                <hr/>
                <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="username" value={props.username} onChange={props.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="password" value={props.password} onChange={props.handleInputChange} />
                    </FormGroup>
                    <Button onClick={props.handleLogin} color="primary" block>Login</Button>
                    <p className="signupLink">
                        <Link to="/signup">dont have an account?  Sign up here</Link>
                    </p>
                </Form>
            </div>
        </div>
    );
}

export default Login;