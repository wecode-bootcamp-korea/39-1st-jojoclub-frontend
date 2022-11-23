import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Modal.scss';

const Modal = ({ open, onClose, productInfo }) => {
  const [productInfoList, setProductInfoList] = useState([]);

  useEffect(() => {
    fetch(`/data/product${productInfo}.json`)
      .then(res => res.json())
      .then(data => setProductInfoList(data));
  }, [productInfo]);

  //장바구니로 데이터 보내기

  const sendItem = () => {
    fetch('http://10.58.52.180:3000/carts', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY2ODk1MjQyNX0.QCBUGO4y1EOTBi8CBAbAYn7QBXYcs5keHQ4JwsqwvxU',
      },
      body: JSON.stringify({ productOptionId: 2, quantity: 1 }),
    })
      .then(response => response.json())
      .then(data => setProductInfoList(data));
  };

  if (!open) return null;
  return (
    <div className="modal">
      <div className="modalContainer">
        <div className="modalClose">
          <button onClick={onClose} className="closeBtn" />
        </div>
        <div className="content">
          <div className="previewProductSection">
            {productInfoList.map(({ id, enName, price, content, img }) => (
              <div className="productsContainer" key={id}>
                <div className="productImage">
                  <img src={img} alt="sample" />
                </div>
                <ul className="productDetail">
                  <li className="nameEn">{enName}</li>
                  <li className="description">{content}</li>
                  <li className="price">{price}</li>
                  <li className="btnBox">
                    {/* <button className="btnCart" onClick={addToCart}> */}
                    <button className="btnCart" onClick={sendItem}>
                      장바구니 담기
                    </button>
                  </li>
                  <li className="btnBox">
                    <Link to="#">
                      <button className="btnBuyNow">바로 구매하기</button>
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
