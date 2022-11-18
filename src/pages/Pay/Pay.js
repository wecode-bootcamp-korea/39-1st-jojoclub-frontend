import React from 'react';
import './Pay.scss';

function Pay() {
  return (
    <div className="pay">
      <main>
        <p>
          결제하기 단계로 이동하기 전에 아래 고객님의 주문사항을 확인해주세요
        </p>
        <div>결제방법</div>
        신용카드
        <input type="radio" name="payway">
          신용카드
        </input>
        <input type="radio" name="payway">
          무통장 입급
        </input>
        <input type="radio" name="payway">
          Kakao Pay
        </input>
        <input type="radio" name="payway">
          Payco
        </input>
        <input type="radio" name="payway">
          SSG Pay
        </input>
        <input type="radio" name="payway">
          네이버페이
        </input>
      </main>
      <div className="asidemenu">
        <aside>
          <h2>고객관리지원팀</h2>
          <p>
            문의 사항이 있으시거나 고객관리지원팀과 상담을 원하실 경우 다음 링크
            consumercare-kr@jomalone.com를 눌러 이메일 문의 서비스로 보내주시면
            응대를 도와드리겠습니다. 도움이 필요하시면 고객관리지원팀으로 문의
            바랍니다. 02-6971-3228 라이브 챗 또는 이메일 문의 서비스를
            이용하시면 보다 신속하게 응대를 도와드리겠습니다. 감사합니다.
          </p>
        </aside>
        <aside>
          <h2>주문 요약</h2>
          <p>장바구니에 담겨진 수량 3</p>
          <p>합계 ₩</p>
          <p>배송비</p>
          <p>총 합계</p>
        </aside>
        <aside>
          <h2>쿠폰 코드</h2>
          <p>사용 가능한 쿠폰 코드를 입력하세요.</p>
          <input type="text" />
          <button>입력</button>
          <p>한 주문당 코드 1회 사용 가능</p>
        </aside>
        <aside>
          <h2>추가 정보</h2>
          <div>배송 정보 </div>
          <div>반품 및 교환 정책</div>
          <div>구매 가능 수량 안내</div>
        </aside>
      </div>
    </div>
  );
}

export default Pay;
