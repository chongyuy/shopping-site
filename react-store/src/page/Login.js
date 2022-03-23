import React ,{ useState }from "react";
import "../css/app.scss";
import "../css/style.scss";
import { useNavigate  } from 'react-router-dom'

function Login () {
  let navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault();
    console.log(email)
    navigate('/');
  }
  // state
   const [email, Setemail] = useState('');
   const [password, Setpassword] = useState('');
  function handleChange(e){
    console.log(e.target.name)
    if(e.target.name==="email"){
      Setemail(e.target.value)
    }
    else{
      Setpassword(e.target.value)
    }
   }
    return (
      <div className="login-wrapper">
          
        <form className="box login-box" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="text" placeholder="Email" name="email" value={email} onChange={handleChange}></input>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type='password'
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}></input>
            </div>
          </div>
          <div className="control">
            <button className="button is-fullwidth is-primary">Login</button>
          </div>
        </form>
      </div>
    );
  
}
export default Login;
