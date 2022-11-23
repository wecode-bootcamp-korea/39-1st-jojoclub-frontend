import React, { useState } from 'react';
import './Shopping.scss';

function Shoppinglist({ itemdata, itemInfo, setItemInfo, onChangeQty }) {
  //상품리스트 삭제

  //수량 선택창
  const qtySelect = [...Array(8).keys()].map(key => key + 1);
  const [qtyOpen, setQtyOpen] = useState(false);

  //수량 선택창 끄기
  const modalclose = () => {
    if (qtyOpen) setQtyOpen(false);
  };

  //수량 선택하여 수량 바꾸기
  const qtychange = num => {
    itemdata.quantity = num;
    onChangeQty(itemdata.userNum, num);
  };

  //장바구니 상품 제거
  const handelDeleteData = (cartsNum, id) => {
    setItemInfo(itemInfo.filter(item => item.id !== id));

    fetch('http://10.58.52.180:3000/carts', {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        cartsId: cartsNum,
      }),
    });
  };

  return (
    <div className="buyitems" key={itemdata.userNum} onClick={modalclose}>
      <div>image</div>
      <div>
        <p>{itemdata.name_ko}</p>
        <p>{itemdata.name_en}</p>
        <p>{itemdata.size}</p>
      </div>
      <div>₩{itemdata.price}</div>
      <div className="qtyarea">
        <button
          onClick={() => {
            setQtyOpen(true);
          }}
        >
          {itemdata.quantity} ⋁
        </button>
        <div className={`qtybtn ${qtyOpen ? 'active' : 'inactive'}`}>
          {qtySelect.map((btn, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  qtychange(btn);
                }}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
      <div className="totalprice">
        <p>₩{itemdata.price * itemdata.quantity}</p>
        <p
          className="deleteitem"
          onClick={() => handelDeleteData(itemdata.userNum, itemdata.cartsNum)}
        >
          삭제
        </p>
      </div>
    </div>
  );
}

export default Shoppinglist;
