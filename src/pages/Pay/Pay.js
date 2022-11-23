import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Pay.scss';

function Pay() {
  //배송지 정보 가져오기
  const [deliveryInfo, setDeliveryInfo] = useState([]);

  useEffect(() => {
    fetch('주소', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(response => response.json())
      .then(data => setDeliveryInfo(data));
  }, []);

  return (
    <div className="pay">
      <main>
        <img classname="delivery" src="/images/delivery.png" alt="delivery" />
        <div className="deliveryinfo">
          <p>배송지 정보</p>
          <p className="needed">*는 필수 입력 정보입니다.</p>
          <p>*주소</p>
          <p>{deliveryInfo.address}</p>
          <p>*휴대전화 번호</p>
          <p>{deliveryInfo.phone}</p>
          <div className="needbox">
            <p>배송 요청사항</p>
            <input type="text" />
          </div>
          <h2>선물 포장</h2>
          <div className="package">
            <input type="radio" name="option" /> 선물 포장 서비스 선택
          </div>
          <p>
            *정품 구매 시 위 말론 선릉을 대표하는 시그니처 박스에 정성스럽게
            포장해 드립니다.
          </p>
          <p>
            *쇼핑백 동봉을 원하실 경우 장바구니 하단 페이지에서 별도 구매해
            주시기 바랍니다.
          </p>
          <button className="buy">결제하기</button>
        </div>
      </main>
      <div className="asidemenu">
        <aside>
          <h2>고객관리지원팀</h2>
          <p>
            문의 사항이 있으시거나 고객관리지원팀과 상담을 원하실 경우 다음 링크
            consumercare-kr@jomalone.com를 눌러 이메일 문의 서비스로 보내주시면
            응대를 도와드리겠습니다.
            <p>
              도움이 필요하시면 고객관리지원팀으로 문의 바랍니다. 02-6971-3228
            </p>
            <p>
              라이브 챗 또는 이메일 문의 서비스를 이용하시면 보다 신속하게
              응대를 도와드리겠습니다.
            </p>
            <p>감사합니다.</p>
          </p>
        </aside>
        <aside>
          <h2>주문 요약</h2>
          <p>장바구니에 담겨진 수량 </p>
          <div className="pricetag">
            <p>
              <span>합계 </span>
              <span className="price">₩</span>
            </p>
            <p className="deliveryprice">
              <span>배송비</span>
              <span className="price"> ₩0</span>
            </p>
            <p>
              <span>총 합계</span>
              <span className="price"> ₩</span>
            </p>
          </div>
        </aside>
        <aside>
          <h2>쿠폰 코드</h2>
          <p>사용 가능한 쿠폰 코드를 입력하세요.</p>
          <input className="coupon" type="text" />
          <button>입력</button>
          <p>한 주문당 코드 1회 사용 가능</p>
        </aside>
        <aside classroom="delivery">
          <h2>추가 정보</h2>
          <Link to="/">배송 정보 </Link>
          <Link to="/">반품 및 교환 정책</Link>
          <Link to="/">구매 가능 수량 안내</Link>
        </aside>
      </div>
    </div>
  );
}
export default Pay;
