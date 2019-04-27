import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from "../../utils/API";
import "./signup.css";
import { withRouter } from "react-router-dom";

class Signup extends Component {

    state = {
        email: "",
        username: "",
        password: "",
        image: "",
        title: "",
        placeHolder: "Example: Knight, The Queen, Wizard, etc.",
        signup: false
    };

    validateForm() {
        return this.state.username.length > 0 && this.state.password.legnth > 0 && this.state.image > 0 && this.state.title.legnth > 0;
    }

    handleChange = event => {
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
        console.log(obj); 
        API.saveUser(obj).then(res => {
            console.log(res.data);
            this.setState({email: "", username: "", password: "", image: "", title: "", signup: true});
            if(!this.state.signup) {
                console.log(this.state.signup);
            } else {
                this.props.history.push("/lobby/" + res.data.id);
            }
        }).catch(err => console.log(err));   
    };

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

export default withRouter(Signup);