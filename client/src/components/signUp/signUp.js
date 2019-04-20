import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
// import axios from "axios";
import "./signup.css";

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: "",
            password: "",
            image: "",
            title: "",
            placeHolder: "Example: Knight, The Queen, Wizard, etc."
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.legnth > 0 && this.state.image > 0 && this.state.title.legnth > 0;
    }

    handleChange = event => {
        // console.log(event.target);
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        let form = event.target
        let obj = {};
        for (let i = 0; i < form.elements.length; i++) {
            let values = form.elements[i].value;  
            let inputId = form.elements[i].id;
            obj[inputId]  =  values;
        }
        console.log(obj); //shows us what user input into the form elements
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <FormGroup controlId="email">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="username">
                        <FormLabel>Username</FormLabel>
                        <FormControl
                            
                            value={this.state.username}
                            onChange={this.handleChange}
                    />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>    
                    <FormGroup controlId="image">
                        <FormLabel>Selfie</FormLabel>
                        <FormControl
                            
                            value={this.state.image}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="title">
                        <FormLabel>Your Title</FormLabel>
                        <FormControl
                            value={this.state.title}
                            onChange={this.handleChange}
                            placeholder={this.state.placeHolder}
                        />
                    </FormGroup>
                    <Button
                        block
                        type="submit"
                    >
                        Sign Up.
                    </Button>
                </form>
            </div>
        );
    }
}

export default Signup;