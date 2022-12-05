import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { APIS } from '../../config';
import './Modal.scss';

const Modal = ({ open, onClose, productInfo }) => {
  const [productInfoList, setProductInfoList] = useState({});
  //상품 정보 불러오기
  useEffect(() => {
    fetch(`${APIS.product}/${productInfo}`)
      .then(res => res.json())
      .then(data => setProductInfoList(data));
  }, [productInfo]);

  console.log(productInfoList);
  //장바구니로 데이터 보내기
  const sendItem = id => {
    fetch(`${APIS.carts}`, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        productOptionId: id,
        quantity: 1,
      }),
    })
      .then(response => response.json())
      .then(data => setProductInfoList(data));
  };

  //장바구니 컨펌창
  // const useConfirm = (message = null, onConfirm, onCancel) => {
  //   if (!onConfirm || typeof onConfirm !== 'function') {
  //     return;
  //   }
  //   if (onCancel && typeof onCancel !== 'function') {
  //     return;
  //   }

  //   const confirmAction = () => {
  //     if (window.confirm(message)) {
  //       onConfirm();
  //     } else {
  //       onCancel();
  //     }
  //   };

  //   return confirmAction;
  // };
  // const addConfirm = () => console.log('장바구니에 담김');
  // const cancelConfirm = () => console.log('장바구니 취소');
  // const confirm = useConfirm(
  //   '장바구니에 담으시겠습니까?',
  //   addConfirm,
  //   cancelConfirm
  // );

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
                    <Link to={`/products/${options[0].productOptionId}`}>
                      <div className="productImage">
                        <img src={options[0].img} alt="sample" />
                      </div>
                    </Link>
                    <ul className="productDetail">
                      <Link to={`/products/${options[0].productOptionId}`}>
                        <li className="nameEn">{enName}</li>
                      </Link>
                      <li className="description">{content}</li>
                      <li className="price">{price}</li>
                      <li className="btnBox">
                        <button
                          className="btnCart"
                          onClick={() => {
                            sendItem(options[0].productOptionId);
                            alert('장바구니에 상품이 담겼습니다.');
                          }}
                        >
                          장바구니 담기
                        </button>
                      </li>
                      {/* <li className="btnBox">
                        <Link to="#">
                          <button className="btnBuyNow">바로 구매하기</button>
                        </Link>
                      </li> */}
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
