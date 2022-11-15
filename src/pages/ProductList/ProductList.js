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
    <div>
      {productInfoList.map((productInfo, index) => (
        <ul key={index}>
          <li></li>
          <li>{productInfo.englishName}</li>
          <li>{productInfo.koreanName}</li>
          <li>{productInfo.price}</li>
          <li>{productInfo.size}</li>
        </ul>
      ))}
    </div>
  );
}

export default ProductList;
