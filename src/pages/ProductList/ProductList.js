import React, { useEffect, useState } from 'react';
import './ProductList.scss';

function ProductList() {
  const [productInfoList, setProductInfoList] = useState([]);

  useEffect(() => {
    fetch('/data/productList.json', { method: 'GET' })
      .then(response => response.json())
      .then(result => setProductInfoList(result));
  }, []);
  return (
    <div className="productListContainerWrap">
      <button className="slideLeft">왼쪽</button>
      <div className="productListContainer">
        {productInfoList.map((productInfo, index) => (
          <ul key={index}>
            <li className="productImg">
              <img src={productInfo.productImage} alt="product" />
            </li>
            <div className="productDetailWrap">
              <li className="productEng">{productInfo.englishName}</li>
              <li className="productKor">{productInfo.koreanName}</li>
              <li className="priceTag">{productInfo.price}</li>
              <li className="sizeTag">{productInfo.size}</li>
            </div>
          </ul>
        ))}
      </div>
      <button className="slideRight">오른쪽</button>
    </div>
  );
}

export default ProductList;
