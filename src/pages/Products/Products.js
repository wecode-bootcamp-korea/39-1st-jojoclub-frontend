import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.scss';
import Accordion from './componentes/Accordion';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(result => setProducts(result));
  }, []);

  return (
    <div className="products">
      <div className="bannerImg">
        <img src="/images/products/top_banner_01.png" />
      </div>
      <div className="info">
        <div className="layoutInfoFull">
          <div className="categoryWrap">
            <ol className="category">
              <li className="cateList">
                <Link to="/" title="홈" className="home">
                  홈
                </Link>
              </li>
              <p>/</p>
              <li className="cateList">
                <Link to="/" title="코롱" className="cologne">
                  코롱
                </Link>
              </li>
            </ol>
          </div>
          <div className="leftColumnSection">
            <div className="carousel">
              <div className="slideImg">
                <div className="sildeItem">
                  <img src="/images/products/imgslide_item_01.png" />
                </div>
              </div>
              <ul className="slideBar">
                <li className="slideBarDot" />
                <li className="slideBarDot" />
              </ul>
            </div>
            <span className="btnShare">공유하기</span>
          </div>
          <div className="rightColumnSection">
            {products.map(({ id, nameEn, nameKr, price, description }) => (
              <ul className="productsContainer" key={id}>
                <li className="badge">베스트 셀러</li>
                <li className="nameEn">{nameEn}</li>
                <li className="nameKr">{nameKr}</li>
                <li className="price">{price}</li>
                <li className="reviewBox">
                  <span className="averageRating">4.9/5</span>
                  <span className="btnReadReview">리뷰 보기</span>
                </li>
                <li className="description">{description}</li>
                <li className="sizePicker">
                  <div className="pickerTrack">
                    <div className="trackItem">
                      <img src="/images/products/jo_sku_LGN901_100x100_0.png" />
                    </div>
                    <div className="trackItem" />
                  </div>
                </li>
                <li className="btnBox">
                  <button className="btnCart">장바구니 담기</button>
                </li>
                <li className="wishListBox">
                  <div className="wishList">위시리스트</div>
                  <div className="wishIcon" />
                </li>
                <li className="borderBox" />
              </ul>
            ))}
          </div>
          <div className="infoContentSection">
            <div className="ingredients">
              <Accordion
                title="성분"
                content="전성분: 변성알코올, 정제수, 향료, 유제놀,
                  하이드록시이소헥실3-사이클로헥센카복스알데하이드, 리모넨,
                  신나밀알코올, 리날룰 [ILN29015] *제공된 성분은 동일 제품이라도
                  경우에 따라 변경될 수 있습니다. 최신정보는 제품 포장의 성분을
                  참고하시거나 본사 고객관리지원팀으로 연락 부탁 드립니다."
              />
              <p className="contentBody2">
                조 말론 런던의 제품을 구성하는 성분은 변경될 수 있음을
                알려드립니다. 제품 뒷면의 성분 목록을 확인하시면 가장 최신
                성분표를 확인하실 수 있습니다.
              </p>
            </div>
            <div className="howToUse">
              <Accordion
                title="사용방법"
                content="손목, 귀 뒤 등 맥박이 뛰는 곳에 뿌려줍니다. 단독으로
                  사용하거나 다른 제품과 함께 컴바이닝할 수 있으며 같은 라인의
                  바디 제품과 사용할 수 있습니다."
              />
            </div>
          </div>
        </div>
        <div className="layoutInfoContent">
          <div className="howToUseCologne">메인박스1</div>
          <div className="productList">상품리스트(추천상품)</div>
          <div className="review">
            <h2 className="contentHeader">리뷰</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
