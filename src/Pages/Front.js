import { useState } from 'react';
import Welcome from './Welcome';

function Front() {
  const [user,newUser]=useState();

  const submit=(event)=>{
    event.preventDefault();

    var {username,password}=document.forms[0];

    if(password.value=="hie"){
      window.location.href="/welcome";
    
    } else{
      document.getElementById('login-text').innerHTML="Try Again";
      document.getElementById('q').innerHTML="";
      document.getElementById('w').innerHTML="";
    }

  }

  return (
    <div>
      <h1>Hi, Try Hack Me!</h1>
      <p id='login-text'>Login</p>
      <center><form onSubmit={submit} className='container'>
        <input placeholder='Enter Username' className="a" id="q" type="text" name='username'></input>
        <input placeholder='Enter Password' className="b" id="w" type="password" name='password'></input>
        <button>Click To Submit</button>
      </form></center>
    </div>
  );
}

export default Front;
