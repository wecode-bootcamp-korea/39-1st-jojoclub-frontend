import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Modal.scss';

const Modal = ({ open, onClose, productInfo }) => {
  const [productInfoList, setProductInfoList] = useState({});
  //상품 정보 불러오기
  useEffect(() => {
    fetch(`http://10.58.52.80:3000/product/${productInfo}`)
      .then(res => res.json())
      .then(data => setProductInfoList(data));
  }, [productInfo]);

  console.log(productInfoList);
  //장바구니로 데이터 보내기
  const sendItem = () => {
    fetch('http://10.58.52.180:3000/carts', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY2ODk1MjQyNX0.QCBUGO4y1EOTBi8CBAbAYn7QBXYcs5keHQ4JwsqwvxU',
      },
      body: JSON.stringify({
        productOptionId: `${productInfoList.productId}`,
        quantity: 1,
      }),
    })
      .then(response => response.json())
      .then(data => setProductInfoList(data));
  };

  //장바구니 컨펌창
  const useConfirm = (message = null, onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== 'function') {
      return;
    }
    if (onCancel && typeof onCancel !== 'function') {
      return;
    }

    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
      } else {
        onCancel();
      }
    };

    return confirmAction;
  };
  const addConfirm = () => console.log('장바구니에 담김');
  const cancelConfirm = () => console.log('장바구니 취소');
  const confirm = useConfirm(
    '장바구니에 담으시겠습니까?',
    addConfirm,
    cancelConfirm
  );
  if (!open) return null;
  return (
    <div className="modal">
      <div className="modalContainer">
        <div className="modalClose">
          <button onClick={onClose} className="closeBtn" />
        </div>
        <div className="content">
          <div className="previewProductSection">
            {productInfoList[0]?.productId &&
              productInfoList.map(
                ({ productId, enName, price, content, options }) => (
                  <div className="productsContainer" key={productId}>
                    <div className="productImage">
                      <img src={options[0].img} alt="sample" />
                    </div>
                    <ul className="productDetail">
                      <li className="nameEn">{enName}</li>
                      <li className="description">{content}</li>
                      <li className="price">{price}</li>
                      <li className="btnBox">
                        <button
                          className="btnCart"
                          onClick={(sendItem, confirm)}
                        >
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
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
