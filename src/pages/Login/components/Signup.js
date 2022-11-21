import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AGREE_INFO, RECEPTION } from '../AgreeInfo';
import './Signup.scss';

export default function Signup() {
  // const signupFetchFunction = e => {
  //   signupIsValidate
  //     ? navigate('/')
  //     : alert('아이디 또는 비밀번호를 확인해 주세요.');
  // };

  const signupFetchFunction = e => {
    fetch('http://10.58.52.180:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.pw,
        phoneNumber: userInfo.phoneNum,
      }),
    })
      .then(response => {
        if (response.ok !== true) {
          throw new Error('error');
        }
        return response.json();
      })
      .catch(err => {
        alert('회원가입 실패');
      })
      .then(data => {
        alert('회원가입 성공!');
        navigate('/');
      });
  };

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    pw: '',
    phoneNum: '',
  });

  const handleUserInfo = event => {
    const { name, value } = event.target;

    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const signupIsValidate =
    userInfo.name.length > 0 &&
    userInfo.email.includes('@') &&
    userInfo.pw.length >= 6;

  // const validatePassword = userInfo.pw.search(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
  // );

  // const validateLowercaseChar = userInfo.pw.match(/^(?=.*[a-z])$/);
  // const validateUppercaseChar = userInfo.pw.match(/^(?=.*[A-Z])$/);
  // const validateNumbers = userInfo.pw.match([0 - 9]);
  // const validatePwLength = userInfo.pw.length >= 8;
  // const validateSpecialChar = userInfo.pw.match([$@$!%*?&]);

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const [agreeList, setAgreeList] = useState({
    usingTerm: false,
    personal: false,
    marketing: false,
  });

  const handleAgree = name => {
    setAgreeList(prev => ({ ...prev, [name]: true }));
  };

  const handleDisAgree = name => {
    setAgreeList(prev => ({ ...prev, [name]: false }));
  };

  const isAllChecked = () => {
    const isAllCheck = Object.values(agreeList).every(el => el === true);
    let newObj = {};
    if (isAllCheck) {
      for (let key in agreeList) {
        newObj = { ...newObj, [key]: false };
      }
    } else {
      for (let key in agreeList) {
        newObj = { ...newObj, [key]: true };
      }
    }
    setAgreeList(newObj);
  };

  return (
    <div className="newCustomer">
      <div className="inputSignupBox">
        <p className="bold">신규 고객</p>
        <div className="inputSignup">
          <input
            type="text"
            placeholder="* 이름"
            name="name"
            value={userInfo.name}
            onChange={handleUserInfo}
          />
        </div>
        <div className="inputSignup">
          <input
            type="text"
            placeholder="* 이메일 주소"
            name="email"
            value={userInfo.email}
            onChange={handleUserInfo}
          />
        </div>
        <div className="inputSignup">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="* 비밀번호"
            name="pw"
            value={userInfo.pw}
            onChange={handleUserInfo}
          />
        </div>
        {/* <div className="passwordCondition">
          <ul className="passwordConditionList">
            <li>최소 한 글자 이상의 소문자를 입력해주세요.</li>
            <li>최소 한 글자 이상의 대문자를 입력해주세요.</li>
            <li>최소 한 개 이상의 숫자를 포함해주세요.</li>
            <li>여덟 글자 이상으로 생성해주세요.</li>
            <li>최소 한 개 이상의 특수문자를 포함해주세요.</li>
          </ul>
        </div> */}
        <label>
          <input type="checkbox" value="showPw" onChange={togglePassword} />
          비밀번호 표시
        </label>
        <p className="pwCautionMsg">
          영문 대문자, 소문자, 숫자, 특수문자를 모두 조합하여 8자 이상으로
          구성해주세요. (예시: Jomalone123!)
        </p>
      </div>
      <div className="phoneNumberBox">
        <p className="phoneNumber">*휴대전화 번호</p>
        <input
          className="phoneNumInput"
          type="text"
          name="phoneNum"
          placeholder="000-0000-0000"
          value={userInfo.phoneNum}
          onChange={handleUserInfo}
        />
        {/* <div className="phoneNumInput">
          <select>
            <option selected>선택</option>
            <option>010</option>
            <option>011</option>
            <option>016</option>
            <option>017</option>
            <option>018</option>
            <option>019</option>
          </select>
          <input type="tel" maxlength="4" />
          <input type="tel" maxlength="4" />
        </div> */}
        <button className="signupBtn">인증번호 요청</button>
        <input
          className="certificationNum"
          type="number"
          placeholder="* 인증번호"
          disabled
        />
        <button className="signupBtn">인증번호 확인</button>
      </div>
      <div className="agreement">
        {AGREE_INFO.map(({ id, title, name, term }) => (
          <div key={id}>
            <p className="agreementBold">{title}</p>
            <div className="scrollBarBox">{term}</div>
            <div className="agree">
              <label>
                <input
                  type="radio"
                  name={name}
                  checked={agreeList[name]}
                  onClick={() => handleAgree(name)}
                />
                동의
              </label>
              <label>
                <input
                  type="radio"
                  name={name}
                  checked={!agreeList[name]}
                  onClick={() => handleDisAgree(name)}
                />
                동의하지 않음
              </label>
            </div>
          </div>
        ))}
        <div className="allAgree">
          <label>
            <input
              type="checkbox"
              onChange={isAllChecked}
              checked={Object.values(agreeList).every(el => el === true)}
            />
            위 모든 항목에 동의합니다
          </label>
        </div>
        <div className="whetherToReceive">
          {RECEPTION.map((accept, index) => (
            <div key={index} className="reception">
              {accept.title}
              <label>
                <input type="radio" name={accept.name} /> 수신함
              </label>
              <label>
                <input type="radio" name={accept.name} /> 수신안함
              </label>
            </div>
          ))}
        </div>
        <p className="agreementMsg">
          ※ *는 필수적 동의 사항입니다. 귀하꼐서는 필수항목 수집·이용에 대한
          동의를 거부하실 수 있으나, 동의를 거부하실 경우 회원가입, 서비스 이용
          등이 제한될 수 있습니다.
        </p>
        <p className="olderThanFourteen">
          <label>
            <input type="checkbox" /> *가입자 본인은 만 14세 이상입니다. (만
            14세 이상부터 회원가입이 가능합니다)
          </label>
        </p>
        <button
          disabled={!signupIsValidate}
          className="signupBtn"
          onClick={signupFetchFunction}
        >
          회원 가입
        </button>
      </div>
    </div>
  );
}
