import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from "react-router-dom";
import "../style/login.css";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";

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

	componentDidMount() {
    	// If logged in and user navigates to Register page, should redirect them to dashboard
	    if (this.props.auth.isAuthenticated) {
	      this.props.history.push("/dashboard");
	    }
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
	    if (nextProps.errors) {
	      this.setState({
	        errors: nextProps.errors
	      });
	    }
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
		  };

	  this.props.registerUser(newUser, this.props.history); 
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
			                  className={classnames("", {
			                    invalid: errors.name
			                  })}
			                  required
				            />
				            <span className="red-text">{errors.name}</span>
				            <input 
	        				  onChange={this.onChange}
			                  value={this.state.email}
			                  placeholder="Enter Email"
			                  error={errors.name}
			                  id="email"
			                  type="text"
			                  className={classnames("", {
			                    invalid: errors.email
			                  })}
			                  required
				            />
				            <span className="red-text">{errors.email}</span>
	        				<input 
	        				  onChange={this.onChange}
			                  value={this.state.password}
			                  placeholder="Create Password"
			                  error={errors.name}
			                  id="password"
			                  type="password"
			                  className={classnames("", {
			                    invalid: errors.password
			                  })}
			                  required
				            />
				            <span className="red-text">{errors.password}</span>
				            <input 
	        				  onChange={this.onChange}
			                  value={this.state.password2}
			                  placeholder="Confirm Password"
			                  error={errors.name}
			                  id="password2"
			                  type="password"
			                  className={classnames("", {
			                    invalid: errors.password2
			                  })}
			                  required
				            />
				            <span className="red-text">{errors.password2}</span>
	        				<button id= "login-button" type="submit">Next</button>
	        				<p> Already have an account? <Link to="/">Log in</Link>. </p>
	        			</div>
	        		</form>
	            </div>
	    	</div>
		);
	}
}

//export default Register;

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));


