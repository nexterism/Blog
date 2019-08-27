import React, { Component } from 'react';

class signup extends Component {
    render() {
        return (
            <div>
                <div class="container login-container">
      <div class="row">
        <div class="col-md-6">
          <h1><span id="fl">Nexter's </span><span id="sl">Blog</span></h1>
        </div>
        <div class="col-md-6 login-form">
          
          <h3>Sign Up</h3>
          <form>
            <div class="form-group">
              <input type="text" class="form-control" name="First Name" placeholder="First Name"/>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="Last Name" placeholder="Last Name"/>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="username" placeholder="Username"/>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="E-mail" placeholder="E-mail"/>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="password" placeholder="Password"/>
            </div>
            <div class="form-group">
              <button type="button" class="btn btn-primary btn-lg btn-block">Sign up</button>
            </div>
            <div class="form-group forget-password">
                <a href="#">Forget Password</a>
            </div>
          </form>
        </div>
      </div>
    </div>   
            </div>
        );
    }
}

export default signup;