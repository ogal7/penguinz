import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import "../style/login.css";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";


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

	componentDidMount() {
	    // If logged in and user navigates to Login page, should redirect them to dashboard
	    if (this.props.auth.isAuthenticated) {
	      this.props.history.push("/dashboard");
	    }
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
	    if (nextProps.auth.isAuthenticated) {
	      this.props.history.push("/dashboard"); // push user to dashboard when they login
	    }

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

    	const userData = {
      	email: this.state.email,
      	password: this.state.password
      };

      this.props.loginUser(userData); // since we handle the redirect 
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
	        					className={classnames("", {
				                    invalid: errors.email || errors.emailnotfound
				                  })}
	        					/>
	        				<span className="red-text">
			                  {errors.email}
			                  {errors.emailnotfound}
			                </span>
	        				<input 
	        					onChange= {this.onChange}
	        					type="password" 
	        					placeholder="Enter Password" 
	        					name="pass" 
	        					className={classnames("", {
				                    invalid: errors.password || errors.passwordincorrect
				                  })}
	        					/>
				        	<span className="red-text">
			                  {errors.password}
			                  {errors.passwordincorrect}
			                </span>
	        				<button id= "login-button" type="submit">Login</button>
	        				<p> Don't have an account? <Link to="/register">Register</Link>. </p>
	        			</div>
	        		</form>
	            </div>
	    	</div>
		);
	}
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

//export default Login;