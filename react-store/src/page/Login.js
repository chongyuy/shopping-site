import React from "react";
import "../css/app.scss";
import "../css/style.scss";
class Login extends React.Component {
  handSubmit = event => {
    //1. stop default event
    event.preventDefault();
    console.log('You clicked submit.');

    //2. acquire the data from form

    //3. process login logic

    //4. jump to the app view
    // this.props.history.push('/')
  }
  render() {
    return (
      <div className="login-wrapper">
        <form className="box login-box" onSubmit={this.handSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="text" placeholder="Email"></input>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Password"
              ></input>
            </div>
          </div>
          <div className="control">
            <button className="button is-fullwidth is-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
