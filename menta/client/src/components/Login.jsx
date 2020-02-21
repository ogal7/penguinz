import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import "../style/login.css";


class Login extends Component {
	constructor ()
	{
		super();
		this.state={
			email: "",
			password: "",
			errors: {}
		};
	}

	onChange = e => {
    	this.setState({ [e.target.id]: e.target.value });
  	};

  	onSubmit = e => {
    	e.preventDefault();

    	const userData = {
      	email: this.state.email,
      	password: this.state.password
      };
    };

	render(){
		const {errors} = this.state;
		return(
	    	<div class="container">
	            <div class="form-container">
	        		<form noValidate onSubmit={this.onSubmit}>
	                    <h1 class="login-header"> Login </h1>
	        			<div class= "login-input">
	        				<input 
	        					onChange= {this.onChange}
	        					type="text" 
	        					placeholder="Enter Email" 
	        					name="email" 
	        					required />
	        				<input 
	        					onChange= {this.onChange}
	        					type="password" 
	        					placeholder="Enter Password" 
	        					name="pass" 
	        					required />
	        				<button id= "login-button" type="submit">Login</button>
	        				<p> Don't have an account? <Link to="/register">Register</Link>. </p>
	        			</div>
	        		</form>
	            </div>
	    	</div>
		);
	}
}

export default Login;