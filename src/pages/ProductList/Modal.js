import React, { useEffect, useState } from 'react';
import './Modal.scss';

const Modal = ({ open, onClose, productInfo }) => {
  const [productInfoList, setProductInfoList] = useState([]);

  useEffect(() => {
    fetch(`/data/product${productInfo}.json`)
      .then(res => res.json())
      .then(data => setProductInfoList(data));
  }, [productInfo]);

  console.log(productInfo);
  console.log(productInfoList);

  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className="modalClose">
          <button onClick={onClose} className="closeBtn" />
        </div>
        {/* 여기서부터 모달 컨텐츠. 부모컴포넌트에서 받아와야 함 */}
        <div className="content">
          <div className="previewProductSection">
            {productInfoList.map(
              ({ id, englishName, price, shortDescription, productImage }) => (
                <div className="productsContainer" key={id}>
                  <div className="productImage">
                    <img src={productImage} alt="sample" />
                  </div>
                  <ul className="productDetail">
                    <li className="nameEn">{englishName}</li>
                    <li className="description">{shortDescription}</li>
                    <li className="price">{price}</li>
                    <li className="btnBox">
                      <button className="btnCart">장바구니 담기</button>
                    </li>
                    <li className="btnBox">
                      <button className="btnBuyNow">바로 구매하기</button>
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
