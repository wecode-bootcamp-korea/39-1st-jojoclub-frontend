import React from 'react';
import './Main.scss';
//import ProductList from './ProductList';

function Main() {
  return (
    <>
      <div className="videoWrapper">
        <div className="promoVideo">
          <video
            className="backgroundVid"
            autoPlay
            loop
            muted
            pster="/images/main/snowglobe.png"
          >
            <source src="/images/main/snowglobe-vid.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="collectionWrapper">
          <div className="promoText">
            <a href="#">스노우 데이</a>
          </div>
          <div className="collection">
            <a href="#">컬렉션 보기</a>
          </div>
        </div>
      </div>

      <div className="section-wrapper">
        여기는 2분할 주력 상품1
        <div className="mainProduct">
          <img className="productImgMed" alt="main product" />
          <a className="productName" href="#">
            제품이름
          </a>
          <a className="productDetailPg" href="#">
            제품 보기
          </a>
        </div>
        <div className="productImg">
          <img className="productImgLrg" alt="main product" />
        </div>
      </div>
      <div className="section-wrapper">온라인 혜택</div>
      <div className="section-wrapper">여기는 2분할 주력 상품2</div>
      {/* <ProductList /> */}
      <div className="section-wrapper">여기는 2분할 주력 상품3</div>
      <div className="section-wrapper">
        기타 서비스: 선물포장, 샘플, 무료배송
      </div>
    </>
  );
}

export default Main;
