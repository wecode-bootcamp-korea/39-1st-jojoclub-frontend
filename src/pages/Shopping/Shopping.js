import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Shopping.scss';

function Shopping() {
  //장바구니 데이터 가져오기
  const [itemInfo, setItemInfo] = useState([]);

  useEffect(() => {
    fetch('/data/shoppingdata.json')
      .then(response => response.json())
      .then(data => setItemInfo(data));
  }, []);

  //상품리스트 삭제
  const removeItem = id => setItemInfo(itemInfo.filter(item => item.id !== id));

  //상품 총 가격 계산
  let totalprice = () => {
    let total = 0;
    for (let i = 0; i < itemInfo.length; i++) {
      total += itemInfo[i].pricenum * itemInfo[i].qty;
    }
    return total;
  };

  //추천 상품 장바구니 담기
  const addItem = index => {
    setItemInfo([recommenditem[index], ...itemInfo]);
  };

  //추천 상품 리스트
  const recommenditem = [
    {
      index: 0,
      id: 8,
      image_url: 'sample',
      koName: '쇼핑백(s)',
      enName: 'small gift bag',
      price: '100',
      pricenum: 100,
      qty: 1,
    },
    {
      index: 1,
      id: 9,
      image_url: 'sample',
      koName: '쇼핑백(m)',
      enName: 'medium gift bag',
      price: 100,
      pricenum: 100,
      qty: 1,
    },
    {
      index: 2,
      id: 10,
      image_url: 'sample',
      koName: '블로썸 허니 코롱',
      enName: 'blossom honey cologne',
      price: '100',
      pricenum: 100,
      qty: 1,
    },
  ];
  //수량 선택창
  /*const qtySelect = [...Array(8).keys()].map(key => key + 1);*/

  const [qtyOpen, setQtyOpen] = useState(false);

  //수량 선택창 또 다른 방법
  /* const QtyInput = () => {
    const arr = [];
    for (let i = 1; i < 9; i++) {
      arr.push(<button>{i}</button>);
    }
    return arr; 
  };*/

  return (
    <div className="shopping">
      <main>
        <h1 className="title">장바구니</h1>
        <h2 className="subtitle">(3 개의 제품/장바구니에 담긴 제품 수량)</h2>

        <div className="listitems">
          <div>제품</div>
          <div>가격</div>
          <div>수량</div>
          <div>총 합계</div>
        </div>
        {itemInfo.map((itemdata, i) => {
          return (
            <div className="buyitems" key={itemdata.id}>
              <div>
                <p>{itemdata.koName}</p>
                <p>{itemdata.enName}</p>
                <p>{itemdata.size}</p>
              </div>
              <div>₩{itemdata.price}</div>
              <div className="qtyarea">
                <button
                  onClick={() => {
                    setQtyOpen(true);
                  }}
                >
                  {itemdata.qty} ⋁
                </button>
              </div>
              <div className="totalprice">
                <p>₩{itemdata.pricenum * itemdata.qty}</p>
                <p
                  className="deleteitem"
                  onClick={() => removeItem(itemdata.id)}
                >
                  삭제
                </p>
              </div>
            </div>
          );
        })}
        <div className="freeitem">
          <div>선물 박스(BODY CREME)</div>
          <div>증정품</div>
          <div>1</div>
          <div>₩0</div>
        </div>
        <p className="totalpay">합계 ₩{totalprice()}</p>
        <div className="buttonarea">
          <Link to="/">
            <div className="continueshop">쇼핑 계속하기</div>
          </Link>
          <Link to="/">
            <button className="buybutton">결제하기</button>
          </Link>
        </div>
        <div className="recommendtitle">추천 상품</div>
        <div className="recommenditemlist">
          {recommenditem.map(itemdata => {
            return (
              <div className="recommend" key={itemdata.id}>
                <div className="recommendimg">{itemdata.image_url}</div>
                <div className="recommendkrname">{itemdata.koName}</div>
                <div className="recommendengname">{itemdata.enName}</div>
                <div className="recommendprice">₩{itemdata.pricenum}</div>
                <div className="recommendbtn">
                  <button onClick={() => addItem(itemdata.index)}>
                    장바구니 담기
                  </button>
                </div>
              </div>
            );
          })}
        </div>
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
          <p>합계 ₩{totalprice()}</p>
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

export default Shopping;
