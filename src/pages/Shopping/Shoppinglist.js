import React, { useState } from 'react';
import './Shopping.scss';

function Shoppinglist({ itemdata, itemInfo, setItemInfo, onChangeQty }) {
  //상품리스트 삭제
  const removeItem = id => setItemInfo(itemInfo.filter(item => item.id !== id));

  //수량 선택창
  const qtySelect = [...Array(8).keys()].map(key => key + 1);
  const [qtyOpen, setQtyOpen] = useState(false);

  //수량 선택창 끄기
  const modalclose = () => {
    if (qtyOpen === true) setQtyOpen(false);
  };

  //수량 선택하여 수량 바꾸기
  const qtychange = num => {
    itemdata.qty = num;
    onChangeQty(itemdata.id, num);
  };

  return (
    <div className="buyitems" key={itemdata.id} onClick={modalclose}>
      <div>image</div>
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
        <p>₩{itemdata.pricenum * itemdata.qty}</p>
        <p className="deleteitem" onClick={() => removeItem(itemdata.id)}>
          삭제
        </p>
      </div>
    </div>
  );
}

export default Shoppinglist;
