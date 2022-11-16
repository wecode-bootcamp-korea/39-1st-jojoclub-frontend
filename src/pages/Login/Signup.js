import React from 'react';

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
        <p className="agreementBold">*이용 약관(필수)</p>
        <div className="scrollBarBox">
          본 약관은 2017년 04월 06일부터 시행됩니다. 이용약관 Jo Malone London
          Korea Online 웹사이트(이하 '본 사이트')에 오신 것을 환영합니다. Jo
          Malone London Korea Online(“이하 “회사”)는 아래의 약관,
          개인정보처리방침 및 고객 서비스와 특정 기능, 게시물 또는 홍보와
          관련하여 본 사이트 전체에서 제시하는 여타 조건과 정책 (본
          약관(통칭하여, '본 약관'이라 합니다)의 일부이며 그에 포함되는 것으로
          간주됩니다)에 따라, 이용자에게 본 사이트상 컨텐츠와 서비스를
          제공합니다. 이용자는 본 사이트에 접속하거나 이용함으로써 본 약관을
          읽고, 이해하였으며, 일체의 제한요건이나 자격을 불문하고 본 약관에
          따르기로 합의하였음을 인정하는 것입니다 .
        </div>
        <div className="agree">
          <label>
            <input type="radio" name="agree1" /> 동의
          </label>
          <label>
            <input type="radio" name="agree1" /> 동의하지 않음
          </label>
        </div>
        <p className="agreementBold">
          *개인정보의 수집 및 이용에 대한 동의(필수)
        </p>
        <div className="scrollBarBox">
          회사는 본 웹사이트를 통한 회원가입 및 서비스 제공 등을 위하여 아래와
          같은 개인정보를 수집하고 있습니다. - 이름, 비밀번호, 휴대폰 번호,
          이메일 주소 수집 및 이용 목적 멤버십 계정 및 고객 데이터 관리, 회원제
          서비스 이용에 따른 본인확인, 불량회원의 부정 이용 방지와 비인가 사용
          방지, 가입 의사 확인, 연령확인, 불만처리 등 민원처리, 고지사항 전달
        </div>
        <div className="agree">
          <label>
            <input type="radio" name="agree2" /> 동의
          </label>
          <label>
            <input type="radio" name="agree2" /> 동의하지 않음
          </label>
        </div>
        <p className="agreementBold">
          마케팅 수신 및 홍보 목적의 개인정보 수집 및 이용에 대한 동의(선택)
        </p>
        <div className="scrollBarBox">
          수집하는 개인정보 항목 • 이름, 휴대폰 번호, 이메일 주소 수집 및 이용
          목적 SMS, DM, 이메일 등 전자적 전송 매체를 통한 개인 맞춤형 광고 전송,
          이벤트 및 프로모션 관련 정보 안내, 신규 서비스(제품)개발 및 특화, 접속
          빈도 파악 또는 회원의 서비스 이용에 대한 통계
        </div>
        <div className="agree">
          <label>
            <input type="radio" name="agree3" /> 동의
          </label>
          <label>
            <input type="radio" name="agree3" /> 동의하지 않음
          </label>
        </div>
        <div className="allAgree">
          <input type="checkbox" /> 위 모든 항목에 동의합니다
        </div>
        <div className="whetherToReceive">
          <div className="reception">
            뉴스레터 수신여부
            <label>
              <input type="radio" name="reception1" /> 수신함
            </label>
            <label>
              <input type="radio" name="reception1" /> 수신안함
            </label>
          </div>
          <div className="reception">
            MMS 수신여부
            <label>
              <input type="radio" name="reception2" /> 수신함
            </label>
            <label>
              <input type="radio" name="reception2" /> 수신안함
            </label>
          </div>
          <div className="reception">
            DM 수신여부
            <label>
              <input type="radio" name="reception3" /> 수신함
            </label>
            <label>
              <input type="radio" name="reception3" /> 수신안함
            </label>
          </div>
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
