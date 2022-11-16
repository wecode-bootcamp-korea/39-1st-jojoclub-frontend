import React from 'react';
import { Link } from 'react-router-dom';
import './Shopping.scss';

function Shopping() {
  return (
    <>
      <h1 className="title">장바구니</h1>
      <h2 className="subtitle">(3 개의 제품/장바구니에 담긴 제품 수량)</h2>
      <p>
        구매하시는 코롱을 컬러 캡으로 커스터마이즈 해보세요. 컬러 옵션을
        보시려면 <Link to="/">여기</Link>를 클릭하세요.
      </p>
      <div className="listitems">
        <div>제품</div>
        <div>가격</div>
        <div>수량</div>
        <div>총 합계</div>
      </div>
      <button className="buybutton">결제하기</button>

      <h2>고객관리지원팀</h2>

      <p>
        문의 사항이 있으시거나 고객관리지원팀과 상담을 원하실 경우 다음 링크
        consumercare-kr@jomalone.com를 눌러 이메일 문의 서비스로 보내주시면
        응대를 도와드리겠습니다. 도움이 필요하시면 고객관리지원팀으로 문의
        바랍니다. 02-6971-3228 라이브 챗 또는 이메일 문의 서비스를 이용하시면
        보다 신속하게 응대를 도와드리겠습니다. 감사합니다.
      </p>
      <h2>주문 요약</h2>
      <p>장바구니에 담겨진 수량 3</p>
    </>
  );
}

export default Shopping;
