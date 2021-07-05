import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";


class Facebook extends Component {

    state = {
        isLoggedIn: false,
        userId: '',
        name: '',
        email: '',
        picture: ''

    }
    
    responseFacebook = response => {
        console.log(response);
    }

    componentClicked = () => console.log("clicked");

    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = null;
        } else {
            fbContent = (<FacebookLogin
                appId="2344850238887487"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);

        }
        return (
            <div>
                let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = (
                <div style={{
                    width:'300px',
                    margin:'auto',
                    padding:'20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2> Welcome, {this.state.name}</h2>
                    <button type="button" class="btn btn-secondary btn-lg">
                    <a class="nav-link text-white" href="Lobby" >LOBBY.</a>
                    </button>
                </div>
            )
        } else {
            fbContent = (< FacebookLogin appId="2344850238887487"
                autoLoad={
                    false
                }
                fields="name,email,picture"
                onClick={
                    this.componentClicked
                }
                callback={
                    this.responseFacebook
                }
            />)

        }
        return (<div > {
                fbContent
            } </div>
        )
    }
}
            </div>
        )
    }
} 

export default  Facebook;