import React from 'react';
import './Mypage.scss';

export default function Mypage() {
  return (
    <div className="mypage">
      <div className="leftMenu">
        <p className="mypageTab">마이페이지</p>
        <p className="logout">로그아웃</p>
        <ul className="menuList">
          <li>회원정보 입력</li>
          <li>배송주소록</li>
          <li>주문내역 보기</li>
        </ul>
        <div className="customerManagement">
          <p>고객관리 지원팀</p>
          <div>
            문의 사항이 있으시거나 고객관리지원팀과 상담을 원하실 경우 이메일
            문의 서비스로 보내주시면 응대를 도와드리겠습니다. 도움이 필요하시면
            고객관리지원팀으로 문의 바랍니다. 보다 신속하게 응대를
            도와드리겠습니다. 감사합니다.
          </div>
        </div>
      </div>

      <div className="rightAddress">
        <div className="completeSignup">회원가입 완료</div>
        <div className="additionalInfo">
          <p>회원가입이 완료되었습니다.</p>
          <p>
            추가 선택 정보를 기입하시려면 아래 배송지 및 생일 등 선택 정보를
            업데이트 하여 주십시오.
          </p>
          <div className="personalInfo">
            <p className="personalInfoManagementFont">개인정보 관리</p>
            <p>이름</p>
            <p>(고객 이름)</p>
            <p>이메일 주소:</p>
            <p>(고객 이메일)</p>
            <div>
              <input
                className="passwordChange"
                type="password"
                placeholder="●●●●●●●●●●"
                disabled
              />
              <span className="passwordChangeFont">비밀번호 재설정</span>
            </div>
            <p>영문 대문자, 소문자, 숫자, 특수문자 혼합 8자 이상 조합</p>
          </div>
          <div className="address">
            <p className="addressFont">주소</p>
            <div>
              <input
                className="inputAddress"
                type="address"
                placeholder="*주소"
              />
            </div>
            <div>
              <input
                className="inputAddress"
                type="address"
                placeholder="*상세주소"
              />
            </div>
            <p>*휴대전화 번호</p>
            <div className="phoneNumber">
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
            <p>연락처</p>
            <div className="phoneNumber">
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
          </div>
          <div className="additionalInformation">
            <p className="additionalInformationFont">추가정보(선택)</p>
            <p>고객님의 생일은 언제입니까?</p>
            <div className="birthday">
              <select />
              <select />
              <select />
            </div>
            <p>성별</p>
            <label>
              <input type="radio" name="gender" /> 여성
            </label>
            <label>
              <input type="radio" name="gender" /> 남성
            </label>
          </div>
          <div className="agreeToReceive">
            <p className="agreeToReceiveFont">조 말론 런던 소식 받기 (선택)</p>
            <p>
              온라인 부티크 뉴스레터 및 문자 수신에 동의하시면 조 말론 런던의
              신제품 선출시 소식과 이벤트, 혜택 등 다양한 최신 정보를 받아보실
              수 있습니다.
            </p>
            <div className="reception">
              <div>뉴스레터 수신여부</div>
              <label>
                <input type="radio" name="reception1" /> 수신함
              </label>
              <label>
                <input type="radio" name="reception1" /> 수신안함
              </label>
            </div>
            <div className="reception">
              <div>MMS 수신여부</div>
              <label>
                <input type="radio" name="reception2" /> 수신함
              </label>
              <label>
                <input type="radio" name="reception2" /> 수신안함
              </label>
            </div>
            <div className="reception">
              <div>DM 수신여부</div>
              <label>
                <input type="radio" name="reception3" /> 수신함
              </label>
              <label>
                <input type="radio" name="reception3" /> 수신안함
              </label>
            </div>
            <p>
              조 말론 런던의 신제품, 이벤트 등 최신 정보를 받아보시려면 수신에
              동의하여 주세요.
            </p>
            <p>
              온라인 부티크 신제품 출시 소식과 각종 프로모션 코드 혜택은
              뉴스레터 및 MMS 수신에 동의 해주셔야 받아보실 수 있습니다.
            </p>
            <p className="informationMsg">
              가입하신 이메일 주소로 뉴스레터가 발송 됩니다. 원치 않으시는 경우
              '수신안함'에 체크하여 주십시오.
            </p>
            <p>
              회원탈퇴를 하시면 조 말론 런던 신제품 소식 및 이벤트 행사 내용과
              관련된 정보를 제공받으실 수 없고 관련된 서비스의 제공이 불가능하게
              됩니다.
            </p>
            <p>
              회원탈퇴를 원하시는 경우에는 <a>여기</a>를 클릭하세요.
            </p>
          </div>
          <button className="confirmBtn">확인</button>
        </div>
      </div>
    </div>
  );
}
