import React from 'react';

import './Main.scss';

import { Link } from 'react-router-dom';

//import ProductList from './ProductList';

function Main() {
  return (
    <>
      <div className="videoWrap">
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

        <div className="collectionWrap">
          <div className="promoText">
            <p>스노우 데이</p>
          </div>

          <div className="collection">
            <Link to="#">스노우드롭 코롱 보기</Link>
          </div>
        </div>
      </div>

      {/* 여기는 2분할 주력 상품1 */}

      <div className="dualSectionWrap">
        <div className="firstDualProduct">
          <div className="productImgMedWrap">
            <Link to="#">
              <img
                className="productImgMed"
                alt="main product"
                src="/images/main/purfume_s100_04.png"
              />
            </Link>
          </div>

          <div className="showProduct">
            <Link to="#" className="productName">
              화이트 모스 앤 스노우드롭 코롱
            </Link>

            <br />

            <Link to="#" className="productDetailPg">
              제품 보기
            </Link>
          </div>
        </div>

        <div className="productPromoImg">
          <Link to="#">
            <img
              className="productImgLrg"
              alt="main product"
              src="/images/main/promo-products4.png"
            />
          </Link>
        </div>
      </div>

      <div className="onlinePromoSectionWrap">
        <Link to="#">
          <img
            className="seasonalPromoImg"
            src="/images/main/promo-products5.png"
            alt="winter seasonal products"
          />
        </Link>

        <div className="onlinePromoSection">
          <Link to="#" className="onlinePromoTxt">
            온라인 부티크 단독 혜택
          </Link>

          <br />

          <Link to="#" className="productDetailPg">
            더 보기
          </Link>
        </div>
      </div>

      <div className="dualProductWrap">
        <div className="productContainer">
          <div className="firstProduct">
            <Link to="#">
              <img
                className="productImgLrg"
                alt="main product"
                src="/images/main/promo-product3.png"
              />
            </Link>
          </div>

          <div className="firstProductTxt">
            <Link to="#" className="productName">
              미드나이트 머스크 앤 앰버 코롱
            </Link>

            <br />

            <Link to="#" className="productDetailPg">
              더 알아보기
            </Link>
          </div>
        </div>

        <div className="productContainer">
          <div className="firstProduct">
            <Link to="#">
              <img
                className="productImgLrg"
                alt="main product"
                src="/images/main/promo-product4 (2).png"
              />
            </Link>
          </div>

          <div className="firstProductTxt">
            <Link to="#" className="productName">
              오렌지 비터스
            </Link>

            <br />

            <Link to="#" className="productDetailPg">
              더 알아보기
            </Link>
          </div>
        </div>
      </div>

      <div className="listTitle">완벽한 선물</div>

      {/* 추후에 <ProductList /> 머지 */}

      <div className="dualProductWrap">
        <div className="productContainer">
          <div className="firstProduct">
            <Link to="#">
              <img
                className="productImgLrg"
                alt="main product"
                src="/images/main/collection2.png"
              />
            </Link>
          </div>

          <div className="firstProductTxt">
            <Link to="#" className="productName">
              코롱 컬렉션
            </Link>

            <br />

            <Link to="#" className="productDetailPg">
              더 알아보기
            </Link>
          </div>
        </div>

        <div className="productContainer">
          <div className="firstProduct">
            <Link to="#">
              <img
                className="productImgLrg"
                alt="main product"
                src="/images/main/promo-products3.png"
              />
            </Link>
          </div>

          <div className="firstProductTxt">
            <Link to="#" className="productName">
              파인 앤 유칼립투스
            </Link>

            <br />

            <Link to="#" className="productDetailPg">
              더 알아보기
            </Link>
          </div>
        </div>
      </div>

      <div className="extraServiceWrap">
        <div className="extraService">
          <div className="serviceTitle">
            <Link to="#" className="serviceLink">
              선물포장
            </Link>
          </div>

          <p className="serviceDetail">
            시그니처 박스에 정성스럽게 포장해 드립니다. (*일부품목제외)
          </p>
        </div>

        <div className="extraServiceMiddle">
          <div className="serviceTitle">
            <Link to="#" className="serviceLink">
              샘플
            </Link>
          </div>

          <p className="serviceDetail">
            조 말론 런던의 새로운 향을 경험해보세요.
          </p>
        </div>

        <div className="extraService">
          <div className="serviceTitle">
            <Link to="#" className="serviceLink">
              무료 배송
            </Link>
          </div>

          <p className="serviceDetail">향기로운 선물을 전달해 드립니다.</p>
        </div>
      </div>

      <Link to="#">
        <button type="button" className="toTop" />
      </Link>
    </>
  );
}

export default Main;
