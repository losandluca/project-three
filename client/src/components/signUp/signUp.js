import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./signup.css";

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: "",
            password: "",
            image: "",
            aboutYou: "",

        };
    }

    validateForm() {
        return this.state.fullname.length > 0 && this.state.username.length > 0 &&
            this.state.password.legnth > 0 && this.state.image > 0 && this.state.aboutYou.legnth > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
         event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="fullname" bsSize="large">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="username" bsSize="large">
                        <FormLabel>Username</FormLabel>
                        <FormControl
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />

                        <FormGroup controlId="image" bsSize="large">
                            <FormLabel>Selfie</FormLabel>
                            <FormControl
                                value={this.state.image}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="aboutYou" bsSize="large">
                            <FormLabel>About You.</FormLabel>
                            <FormControl
                                value={this.state.aboutYou}
                                onChange={this.handleChange}
                            />
                        </FormGroup>


                    </FormGroup>


                    <Button
                        block
                        bsSize="large"
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