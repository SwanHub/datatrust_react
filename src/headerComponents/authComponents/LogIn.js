import React, { Component } from 'react'

export default class LogIn extends Component {
    state = {
        loginUsername: '',
        loginPassword: '',
        newUsername: '',
        newPassword: '',
        newEmail: '',
        loginForm: false,
        newUserForm: false
    }

    handleLoginClick = () => {
        this.setState({
            loginForm: true
        }) 
    }

    handleLoginPswrdChange = (event) => {
        this.setState({
            loginPassword: event.target.value
        })
    }
    
    handleLoginUserChange = (event) => {
        this.setState({
            loginUsername: event.target.value
        })
    }

    handleLoginSubmit = (event) => {
        event.preventDefault()
        const postObj = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.jwt}`
            },
            body: JSON.stringify({
            username: this.state.loginUsername,
            password: this.state.loginPassword 
            })}

        fetch("https://datatrust-api.herokuapp.com/login", postObj)
                .then(response => response.json())
                .then(r => this.props.logIn(r))
    }

    handleNewUserClick = () => {
        this.setState({
            newUserForm: true
        })
    }

    handleNewUserSubmit = (event) => {
        event.preventDefault()
        fetch('https://datatrust-api.herokuapp.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    user: {
                    username: this.state.newUsername,
                    password: this.state.newPassword,
                    email: this.state.newEmail
                    }
                })
                })
                .then(r => r.json())
                .then(r => this.props.logIn(r))
    }

    handleNewUsernameChange = (event) => {
        this.setState({
            newUsername: event.target.value
        })
    }

    handleNewEmailChange = (event) => {
        this.setState({
            newEmail: event.target.value
        })
    }

    handleNewPasswordChange = (event) => {
        this.setState({
            newPassword: event.target.value
        })
    }

    handleBackClick = () => {
        this.setState({
            loginUsername: '',
            loginPassword: '',
            newUsername: '',
            newPassword: '',
            newEmail: '',
            loginForm: false, 
            newUserForm: false
        })
    }

    render(){
        if (this.state.loginForm) {
            return(
                <form onSubmit={this.handleLoginSubmit}>
                    <input className="auth-input" type="text" placeholder="username" onChange={this.handleLoginUserChange}/> 
                    <input className="auth-input" type="password" placeholder="password" onChange={this.handleLoginPswrdChange}/> 
                    <input className="submit" type="submit" value="Submit"/> 
                    <span className="auth-hamburger" onClick={this.handleBackClick}>|||</span>
                </form>
            )
        } else if (this.state.newUserForm) {
            return(
                <form onSubmit={this.handleNewUserSubmit}>
                    <input className="auth-input" type="text" name="username" placeholder="username" onChange={this.handleNewUsernameChange}/> 
                    <input className="auth-input" type="text" name="email" placeholder="email" onChange={this.handleNewEmailChange}/> 
                    <input className="auth-input" type="password" id="password" placeholder="password" onChange={this.handleNewPasswordChange}/> 
                    <input className="auth-input" type="password" placeholder="confirm"/> 
                    <input className="submit" type="submit" value="Submit"/> 
                    <span className="auth-hamburger" onClick={this.handleBackClick}>||||</span>
                </form>
            )
        } else {
            return (
                <div>
                    <button onClick={this.handleNewUserClick}>Create User</button>
                    <button onClick={this.handleLoginClick}>Log In</button>
                </div>
            )
        }
    }    
}

