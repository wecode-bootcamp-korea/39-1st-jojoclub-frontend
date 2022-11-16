import React, { useEffect, useState } from 'react';
import './ProductList.scss';

function ProductList() {
  const [productInfoList, setProductInfoList] = useState([]);

  useEffect(() => {
    fetch('/data/productList.json')
      .then(response => response.json())
      .then(result => setProductInfoList(result));
  }, []);
  return (
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

                <button type="button" className="previewProduct">
                  미리보기
                </button>
              </div>
            </ul>
          )
        )}
      </div>
      <button type="button" className="slideRight" />
    </div>
  );
}

export default ProductList;
