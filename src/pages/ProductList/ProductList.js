import React, { useEffect, useState } from 'react';
import './ProductList.scss';
import Modal from './Modal';
import './Modal.scss';
function ProductList() {
  const [productInfoList, setProductInfoList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    fetch('/data/productList.json')
      .then(response => response.json())
      .then(result => setProductInfoList(result));
  }, []);
  return (
    <>
      <div className="productList">
        <button type="button" className="slideLeft" />
        <div className="productListContainer">
          {productInfoList.map(
            ({ id, productImage, englishName, koreanName, price, size }) => (
              <ul className="productContainer" key={id}>
                <li className="productImg">
                  <img src={productImage} alt="product" />
                </li>
                <div className="saveFavorite">
                  <button className="saveBtn" />
                </div>
                <div className="productDetailWrap">
                  <li className="newProduct">신제품</li>
                  <li className="productEng">{englishName}</li>
                  <li className="productKor">{koreanName}</li>
                  <div className="priceNsize">
                    <li className="priceTag">{price}</li>
                    <li className="sizeTag">{size}</li>
                  </div>
                  <div className="openModal">
                    <button
                      type="button"
                      className="previewProduct"
                      onClick={() => setOpenModal(true)}
                    >
                      미리보기
                    </button>
                  </div>
                </div>
              </ul>
            )
          )}
        </div>
        <button type="button" className="slideRight" />
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
      {/* <div>
        <button onClick={() => setOpenModal(true)}>modal</button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </div> */}
    </>
  );
}

export default ProductList;
