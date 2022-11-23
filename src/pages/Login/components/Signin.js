import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.scss';

export default function Signin() {
  // const signinFetchFunction = e => {
  //   signinIsValidate
  //     ? navigate('/')
  //     : alert('아이디 또는 비밀번호를 확인해 주세요.');
  // };

  const signinFetchFunction = () => {
    fetch('http://10.58.52.180:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: userInfo.email, password: userInfo.pw }),
    })
      .then(response => {
        if (response.status !== 200) {
          throw new Error('error');
        }
        return response.json();
      })
      .catch(err => {
        alert('아이디 또는 비밀번호를 확인해주세요.');
      })
      .then(data => {
        localStorage.setItem('token', data.accessToken);
        navigate('/');
      });
  };

  const [userInfo, setUserInfo] = useState({
    email: '',
    pw: '',
  });
  const { email, pw } = userInfo;

  const handleUserInfo = event => {
    const { name, value } = event.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const signinIsValidate =
    userInfo.email.includes('@') && userInfo.pw.length >= 6;

  return (
    <div className="existingCustomers">
      <p className="bold">기존 고객</p>
      <div className="inputLoginBox">
        <div className="inputLogin">
          <input
            name="email"
            type="text"
            placeholder=" "
            value={email}
            onChange={handleUserInfo}
          />
          <label htmlFor="name">* 이메일 주소</label>
        </div>
        <div className="inputLogin">
          <input
            name="pw"
            type="password"
            placeholder=" "
            value={pw}
            onChange={handleUserInfo}
          />
          <label htmlFor="name">* 비밀번호</label>
        </div>
      </div>
      <p className="underline">여기를 클릭하세요.</p>
      {/* 비밀번호 힌트를 보시려면 이메일 주소를 입력해 주세요. */}
      <button
        disabled={!signinIsValidate}
        className="loginBtn"
        onClick={signinFetchFunction}
      >
        로그인
      </button>
    </div>
  );
}
