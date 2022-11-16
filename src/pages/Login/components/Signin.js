import React from 'react';
import './Signin.scss';

export default function Signin() {
  return (
    <div className="existingCustomers">
      <p className="bold">기존 고객</p>
      <div className="inputLoginBox">
        <div className="inputLogin">
          <input type="text" placeholder="* 이메일 주소" />
        </div>
        <div className="inputLogin">
          <input type="password" placeholder="* 비밀번호" />
        </div>
      </div>
      <p className="underline">여기를 클릭하세요.</p>
      {/* 비밀번호 힌트를 보시려면 이메일 주소를 입력해 주세요. */}
      <button className="loginBtn">로그인</button>
    </div>
  );
}
