import React from 'react';
import Signup from './Signup';
import Signin from './Signin';
import './Login.scss';
// import './src/styles/variables.scss';

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
