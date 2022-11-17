import React from 'react';
import './Products.scss';

function Products() {
  return (
    <div className="products">
      <div className="bannerImg">
        <img src="/images/products/SPP_DT_top_banner_LBM_1440x112.png" />
      </div>
      <div className="info">
        <div className="layoutInfoFull">
          <div className="category">
            {/* 수정 필요 */}
            <ol>
              <li>
                <a href="/" title="홈">
                  <p className="home">홈</p>
                </a>
              </li>
              <p className="tt">/</p>
              <li>
                <a href="/" title="코롱">
                  <p>코롱</p>
                </a>
              </li>
            </ol>
            {/* 여기까지 */}
          </div>
          <div className="leftColumnSection">
            <div className="carousel">
              <div className="slideImg">
                <img src="/images/products/jo_sku_LGN901_1000x1000_0.png" />
              </div>
              <ul className="slideBar">
                <li className="slideBarDot" />
                <li className="slideBarDot" />
              </ul>
            </div>
            <span className="btnShare">공유하기</span>
          </div>
          <div className="rightColumnSection">
            <p className="badge">베스트 셀러</p>
            <h2 className="nameEn">Lime Basil & Mandarin Cologne</h2>
            <h3 className="nameKr">라임 바질 앤 만다린 코롱</h3>
            <div className="price">₩211,000</div>
            <div className="reviewBox">
              <span className="averageRating">4.9/5</span>
              <span className="btnReadReview">리뷰 보기</span>
            </div>
            <p className="description">
              조 말론 런던의 시그니처 향. 카리브해의 산들바람에서 실려온 듯한
              라임향에 톡 쏘는 바질과 향기로운 백리향이 더해져 독특한 조합을
              만들어 냅니다. 현대적인 감각의 클래식한 향입니다.
            </p>
            <div className="sizePicker">
              <div className="pickerTrack">
                <div className="trackItem">
                  <img src="/images/products/jo_sku_LGN901_100x100_0.png" />
                </div>
                <div className="trackItem" />
              </div>
            </div>
            <button className="btnCart">장바구니 담기</button>
            <div className="wishListBox">
              <div className="wishList">위시리스트</div>
              <div className="wishIcon" />
            </div>
            <div className="borderBox" />
          </div>
          <div className="infoContentSection">
            <div className="ingredients">
              <div className="accordion">
                <h2 className="contentHeader">성분</h2>
                <p className="contentBody">
                  전성분: 변성알코올, 정제수, 향료, 유제놀,
                  하이드록시이소헥실3-사이클로헥센카복스알데하이드, 리모넨,
                  신나밀알코올, 리날룰 [ILN29015] *제공된 성분은 동일 제품이라도
                  경우에 따라 변경될 수 있습니다. 최신정보는 제품 포장의 성분을
                  참고하시거나 본사 고객관리지원팀으로 연락 부탁 드립니다.
                </p>
              </div>
              <p className="contentBody2">
                조 말론 런던의 제품을 구성하는 성분은 변경될 수 있음을
                알려드립니다. 제품 뒷면의 성분 목록을 확인하시면 가장 최신
                성분표를 확인하실 수 있습니다.
              </p>
            </div>
            <div className="howToUse">
              <div className="accordion">
                <h2 className="contentHeader">사용방법</h2>
                <p className="contentBody">
                  손목, 귀 뒤 등 맥박이 뛰는 곳에 뿌려줍니다. 단독으로
                  사용하거나 다른 제품과 함께 컴바이닝할 수 있으며 같은 라인의
                  바디 제품과 사용할 수 있습니다.
                </p>
              </div>
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
