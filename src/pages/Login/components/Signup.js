import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIS } from '../../../config';
import { AGREE_INFO, RECEPTION } from '../AgreeInfo';
import './Signup.scss';

export default function Signup() {
  // const signupFetchFunction = e => {
  //   signupIsValidate
  //     ? navigate('/')
  //     : alert('아이디 또는 비밀번호를 확인해 주세요.');
  // };

  const signupFetchFunction = e => {
    fetch(`${APIS.users}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        name: userInfo.name,
        email: userInfo.email,
        password: confirmPw.pw,
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
        localStorage.setItem('token', data.accessToken);
        navigate('/login');
      });
  };

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phoneNum: '',
  });

  const [confirmPw, setConfirmPw] = useState({
    pw: '',
    pwConfirm: '',
    pwCheck: '비밀번호 입력',
  });

  const handleUserInfo = event => {
    const { name, value } = event.target;

    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const signupIsValidate =
    userInfo.name.length > 0 &&
    userInfo.email.includes('@') &&
    confirmPw.pw.length >= 6 &&
    userInfo.phoneNum.length >= 8;

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

  const handlePwConfirm = event => {
    const { name, value } = event.target;
    setConfirmPw(prev => ({ ...prev, [name]: value }));
  };

  const handlePwCheck = () => {
    if (confirmPw.pw.length < 1 || confirmPw.pwConfirm.length < 1) {
      setConfirmPw(prev => ({ ...prev, pwCheck: '비밀번호 입력' }));
    } else if (confirmPw.pw === confirmPw.pwConfirm) {
      setConfirmPw(prev => ({ ...prev, pwCheck: '일치' }));
    } else if (confirmPw.pw !== confirmPw.pwConfirm) {
      setConfirmPw(prev => ({ ...prev, pwCheck: '불일치' }));
    }
  };

  useEffect(() => {
    handlePwCheck();
  }, [confirmPw.pw, confirmPw.pwConfirm]);

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

  const isAllCheck = Object.values(agreeList).every(el => el === true);

  const isAllChecked = () => {
    let newObj = {};
    for (let key in agreeList) {
      newObj = { ...newObj, [key]: !isAllCheck };
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
            placeholder=" "
            name="name"
            id="name"
            value={userInfo.name}
            onChange={handleUserInfo}
          />
          <label htmlFor="name">* 이름</label>
        </div>
        <div className="inputSignup">
          <input
            type="text"
            placeholder=" "
            name="email"
            id="email"
            value={userInfo.email}
            onChange={handleUserInfo}
          />
          <label htmlFor="name">* 이메일 주소</label>
        </div>
        <div className="inputSignup">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder=" "
            name="pw"
            id="pw"
            value={confirmPw.pw}
            onChange={handlePwConfirm}
          />
          <label htmlFor="name">* 비밀번호</label>
        </div>
        <label>
          <input type="checkbox" value="showPw" onChange={togglePassword} />
          비밀번호 표시
        </label>
        <div className="inputSignup">
          <input
            type="password"
            placeholder=" "
            name="pwConfirm"
            value={confirmPw.pwConfirm}
            onChange={handlePwConfirm}
          />
          <label htmlFor="name">* 비밀번호 재확인</label>
        </div>
        <div>비밀번호 일치여부: {confirmPw.pwCheck}</div>
        <p className="pwCautionMsg">
          영문 소문자, 숫자, 특수문자를 모두 조합하여 6자 이상으로 구성해주세요.
          (예시: Jomalone123!)
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
                  readOnly
                />
                동의
              </label>
              <label>
                <input
                  type="radio"
                  name={name}
                  checked={!agreeList[name]}
                  onClick={() => handleDisAgree(name)}
                  readOnly
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
              checked={isAllCheck}
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
