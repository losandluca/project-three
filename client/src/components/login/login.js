import React, { Component } from "react";
import API from "../../utils/API";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "../login/login.css";

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
       };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // let user = {
    //   email: this.state.email,
    //   password: this.state.password
    // }
    API.currentUser({
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      console.log(res.data);
      this.props.history.push('/lobby/' + res.data.user_id);
    }).catch(err => console.log(err))
      this.setState({ email: "", password: ""})
    }
  

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
         <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
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
          <Button
            block
            type="submit"
            color = "danger"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}