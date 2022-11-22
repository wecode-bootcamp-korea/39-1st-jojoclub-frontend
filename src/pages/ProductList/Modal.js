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
  console.log(productInfo);
  console.log(productInfoList);

  //장바구니로 데이터 보내기
  // const [getInfo, setGetInfo] = useState(0);
  // const addToCart = id => {
  //   setGetInfo(id);
  // };

  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className="modalClose">
          <button onClick={onClose} className="closeBtn" />
        </div>
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
                      {/* <button className="btnCart" onClick={addToCart}> */}
                      <button className="btnCart">장바구니 담기</button>
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
