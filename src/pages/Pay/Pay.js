import React from 'react';
import './Pay.scss';

function Pay() {
  return (
    <div className="pay">
      <main>
        <ul>
          <li>주문서 작성</li>
          <li>주문 검토</li>
          <li>결제</li>
          <li>최종 확인</li>
        </ul>
        <p>배송지 정보</p>
        *는 필수 입력 정보입니다.
        <div>
          <input type="text" />
        </div>
        <div className="address">
          <input type="text" />
          <button>우편번호</button>
        </div>
        <div>
          <input type="text" />
        </div>
        <input type="text" />
        <p>*휴대전화 번호</p>
        <div className="threeinput">
          <select>
            <option selected>선택</option>
            <option>010</option>
            <option>011</option>
            <option>016</option>
            <option>017</option>
            <option>018</option>
            <option>019</option>
          </select>
          <input type="text" />
          <input type="text" />
        </div>
        연락처
        <div className="threeinput">
          <select>
            <option selected>선택</option>
            <option>010</option>
            <option>011</option>
            <option>016</option>
            <option>017</option>
            <option>018</option>
            <option>019</option>
          </select>
          <input type="text" />
          <input type="text" />
        </div>
        <div className="needbox">
          <input type="text" />
        </div>
        배송 정보
        <h2>선물 포장</h2>
        <div className="package">
          <input type="radio" name="option" /> 선물 포장 서비스 선택
        </div>
        <p>
          *정품 구매 시 위 말론 선릉을 대표하는 시그니처 박스에 정성스럽게
          포장해 드립니다.
        </p>
        <p>
          *쇼핑백 동봉을 원하실 경우 장바구니 하단 페이지에서 별도 구매해 주시기
          바랍니다.
        </p>
        <button className="buy">결제하기</button>
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
