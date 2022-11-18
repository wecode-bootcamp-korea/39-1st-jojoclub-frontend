import React, { useState } from 'react';
import './Shopping.scss';

function Shoppinglist({ itemdata, itemInfo, setItemInfo }) {
  //상품리스트 삭제
  const removeItem = id => setItemInfo(itemInfo.filter(item => item.id !== id));

  //수량 선택창
  const qtySelect = [...Array(8).keys()].map(key => key + 1);
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
        <div className={`qtybtn ${qtyOpen ? 'active' : 'inactive'}`}>
          {qtySelect.map((btn, i) => {
            return <button key={i}>{btn}</button>;
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
