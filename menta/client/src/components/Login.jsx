import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "../style/login.css";


class Login extends Component {
	render(){
		return(
	    	<div class="container">
	            <div class="form-container">
	        		<form>
	                    <h1 class="login-header"> Login </h1>
	        			<div class= "login-input">
	        				<input type="text" placeholder="Enter Email" name="email" required />
	        				<input type="password" placeholder="Enter Password" name="pass" required />
	        				<button id= "login-button" type="submit" value= "dashboard.html">Login</button>
	        				<p> Don't have an account? <a href="signup.html">Sign up</a>. </p>
	        			</div>
	        		</form>
	            </div>
	    	</div>
		);
	}
}

export default Login;