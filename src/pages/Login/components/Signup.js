import React from 'react';
import { AGREE_INFO, RECEPTION } from '../AgreeInfo';
import './Signup.scss';

export default function Signup() {
  return (
    <div className="newCustomer">
      <div className="inputSignupBox">
        <p className="bold">신규 고객</p>
        <div className="inputSignup">
          <input type="text" placeholder="* 이름" />
        </div>
        <div className="inputSignup">
          <input type="text" placeholder="* 이메일 주소" />
        </div>
        <div className="inputSignup">
          <input type="password" placeholder="* 비밀번호" />
        </div>
        <label>
          <input type="checkbox" value="showPw" /> 비밀번호 표시
        </label>
        <p className="pwCautionMsg">
          영문 대문자, 소문자, 숫자, 특수문자를 모두 조합하여 8자 이상으로
          구성해주세요. (예시: Jomalone123!)
        </p>
      </div>
      <div className="phoneNumberBox">
        <p className="phoneNumber">*휴대전화 번호</p>
        <div className="phoneNumInput">
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
        </div>
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
        {AGREE_INFO.map(info => (
          <div>
            <p className="agreementBold">{info.title}</p>
            <div className="scrollBarBox">{info.term}</div>
            <div className="agree">
              <label>
                <input type="radio" name={info.name} /> 동의
              </label>
              <label>
                <input type="radio" name={info.name} /> 동의하지 않음
              </label>
            </div>
          </div>
        ))}
        <div className="allAgree">
          <input type="checkbox" /> 위 모든 항목에 동의합니다
        </div>
        <div className="whetherToReceive">
          {RECEPTION.map(accept => (
            <div className="reception">
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
          <input type="checkbox" /> *가입자 본인은 만 14세 이상입니다. (만 14세
          이상부터 회원가입이 가능합니다)
        </p>
        <button className="signupBtn">회원 가입</button>
      </div>
    </div>
  );
}
