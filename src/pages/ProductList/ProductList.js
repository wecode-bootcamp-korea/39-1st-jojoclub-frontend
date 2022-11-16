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
      <button className="slideLeft">왼쪽</button>
      <div className="productListContainer">
        {productInfoList.map(
          ({ id, productImage, englishName, koreanName, price, size }) => (
            <ul key={id}>
              <li className="productImg">
                <img src={productImage} alt="product" />
              </li>
              <div className="productDetailWrap">
                <li className="productEng">{englishName}</li>
                <li className="productKor">{koreanName}</li>
                <li className="priceTag">{price}</li>
                <li className="sizeTag">{size}</li>
              </div>
            </ul>
          )
        )}
      </div>
      <button className="slideRight">오른쪽</button>
    </div>
  );
}

export default ProductList;
