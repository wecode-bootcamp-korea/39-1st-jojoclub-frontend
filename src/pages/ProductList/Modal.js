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
          <div className="leftColumnSection">
            <div className="carousel">
              <div className="slideImg">
                <div className="sildeItem">
                  <img
                    src="/images/productlist/product_sample_01.png"
                    alt="sample"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rightColumnSection">
            {productInfoList.map(
              ({ id, englishName, KoreanName, price, shortDescription }) => (
                <ul className="productsContainer" key={id}>
                  <li className="nameEn">{englishName}</li>
                  <li className="nameKr">{KoreanName}</li>
                  <li className="price">{price}</li>
                  <li className="description">{shortDescription}</li>
                  <li className="btnBox">
                    <button className="btnCart">장바구니 담기</button>
                  </li>
                  <li className="btnBox">
                    <button className="btnBuyNow">바로 구매하기</button>
                  </li>

                  <li className="borderBox" />
                </ul>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
