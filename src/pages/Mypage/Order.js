import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Order.scss';

export default function Order() {
  return (
    <div className="mypage">
      <div className="leftMenu">
        <p className="mypageTab">마이페이지</p>
        <p className="logout">로그아웃</p>
        <ul className="menuList">
          <Link to="/mypage">
            <li>회원정보 입력</li>
          </Link>
          <Link to="/shopping">
            <li>장바구니</li>
          </Link>
          <Link to="/order">
            <li>주문내역 보기</li>
          </Link>
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

      <div className="rightOrder">
        <div className="orderHistory">주문내역 보기</div>
      </div>
    </div>
  );
}
