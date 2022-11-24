import React from 'react';
import Signup from './components/Signup';
import Signin from './components/Signin';
import './Login.scss';

function Login() {
  return (
    <div className="login">
      <div className="allWrap">
        <div className="myPage">마이페이지</div>
        <div className="customer">
          <Signup />
          <Signin />
        </div>
      </div>
    </div>
  );
}

export default Login;
