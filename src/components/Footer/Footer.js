import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="listWrap">
        <div className="customerService">
          <p className="listName">고객 서비스</p>
          <ul>
            <li>자주 묻는 질문</li>
            <li>고객관리지원팀</li>
            <li>나의 프로필</li>
            <li>나의 오더</li>
            <li>주문 조회</li>
            <li>교환 및 환불 규정</li>
            <li>온라인 부티크 쇼핑</li>
          </ul>
        </div>
        <div className="companyIntroduction">
          <p className="listName">회사 소개</p>
          <ul>
            <li>법인 정보</li>
            <li>커리어</li>
          </ul>
        </div>
        <div className="socialNetwork">
          <p className="listName">소셜 네트워크</p>
          <ul>
            <li>인스타그램</li>
            <li>페이스북</li>
            <li>유튜브</li>
          </ul>
        </div>
      </div>
      <div className="bottomText">
        <p>© We Malone Korea 2022</p>
        <p>서울특별시 강남구 테헤란로 427, 10층(삼성동)</p>
        <p>jojoclub</p>
      </div>
    </div>
  );
}

export default Footer;
