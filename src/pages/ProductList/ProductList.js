import React from 'react';
import './ProductList.scss';

function ProductList() {
  return (
    <div className="productCardWrap">
      <div className="indivProductWrap">
        <div className="innerProduct">
          <img />
          <p>신제품</p>
        </div>
        <div className="innerProduct">
          <a href="#">영문 이름 쏼라쏼라</a>
          <p>한글이름 가나다</p>
        </div>
        <div className="innerProduct">
          <p>가격:비싸다 비싸</p>
        </div>
        <div className="innerProduct">
          <button>미리보기</button>
        </div>
        <div className="innerProduct" />
      </div>
    </div>
  );
}

export default ProductList;
