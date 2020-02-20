import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import "../style/login.css";


class Register extends Component {
	constructor(){
		super();
		this.state = {
			name: "",
      		email: "",
      		password: "",
      		password2: "",
      		errors: {}
  		};
	}
	onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  	};

  	onSubmit = e => {
    e.preventDefault();
    	const newUser = {
	      name: this.state.name,
	      email: this.state.email,
	      password: this.state.password,
	      password2: this.state.password2
	  }
    };

	render(){
		const { errors } = this.state;
		return(
	    	<div class="container">
	            <div class="form-container">
	        		<form noValidate onSubmit={this.onSubmit}>
	                    <h1 class="login-header"> Register </h1>
	        			<div class= "login-input">
	        				<input 
	        				  onChange={this.onChange}
			                  value={this.state.name}
			                  placeholder="Enter Name"
			                  error={errors.name}
			                  id="name"
			                  type="text"
			                  required
				            />
				            <input 
	        				  onChange={this.onChange}
			                  value={this.state.email}
			                  placeholder="Enter Email"
			                  error={errors.name}
			                  id="email"
			                  type="text"
			                  required
				            />
	        				<input 
	        				  onChange={this.onChange}
			                  value={this.state.password}
			                  placeholder="Create Password"
			                  error={errors.name}
			                  id="password"
			                  type="password"
			                  required
				            />
				            <input 
	        				  onChange={this.onChange}
			                  value={this.state.password2}
			                  placeholder="Confirm Password"
			                  error={errors.name}
			                  id="password2"
			                  type="password"
			                  required
				            />
	        				<button id= "login-button" type="submit">Next</button>
	        				<p> Already have an account? <Link to="/">Log in</Link>. </p>
	        			</div>
	        		</form>
	            </div>
	    	</div>
		);
	}
}

export default Register;