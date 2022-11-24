import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { APIS } from '../../config';
import Accordion from './componentes/Accordion';
import ImageSlide from './componentes/ImageSlide';
import './Products.scss';

function Products() {
  const params = useParams();
  const userId = params.id;

  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`http://10.58.52.119:3000/product/${userId}`)
      .then(response => response.json())
      .then(result => setUser(result.data));
  }, [userId]);

  const { productId, enName, koName, content, ingredient, menual } = user;

  console.log(productId, enName);

  const slides = [
    { url: '/images/products/purfume_s100_01.png', title: 'imgslide1' },
    { url: '/images/products/purfume_pack_02.png', title: 'imgslide2' },
  ];

  const sendItem = () => {
    fetch(`${APIS.carts}`, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({ productOptionId: 2, quantity: 1 }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

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
            <ImageSlide slides={slides} />
            <span className="btnShare">공유하기</span>
          </div>
          <div className="rightColumnSection">
            <ul className="productsContainer" key={productId}>
              <li className="badge">베스트 셀러</li>
              <li className="nameEn">{enName}</li>
              <li className="nameKr">{koName}</li>
              <li className="price">{options[0].price}</li>
              <li className="reviewBox">
                <span className="averageRating">4.9/5</span>
                <span className="btnReadReview">리뷰 보기</span>
              </li>
              <li className="description">{content}</li>
              <li className="sizePicker">
                <div className="pickerTrack">
                  <li className="trackItem">
                    <img
                      className="trackItemImg"
                      src={options[0].size}
                      alt="size100ml"
                    />
                    <p className="trackSize">100ML</p>
                  </li>
                  <li className="trackItem">
                    <img
                      className="trackItemImg"
                      src={options[0].size}
                      alt="size50ml"
                    />
                    <p className="trackSize">50ML</p>
                  </li>
                  <li className="trackItem">
                    <img
                      className="trackItemImg"
                      src={options[0].size}
                      alt="size30ml"
                    />
                    <p className="trackSize">30ML</p>
                  </li>
                </div>
              </li>
              <li className="btnBox">
                <button className="btnCart" onClick={sendItem}>
                  장바구니
                </button>
                <button className="btnCart">바로구매</button>
              </li>
              <li className="wishListBox">
                <div className="wishList">위시리스트</div>
                <div className="wishIcon">
                  <span class="material-symbols-outlined">bookmark</span>
                </div>
              </li>
              <li className="borderBox" />
            </ul>
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
              <p className="contentBody2">{ingredient}</p>
            </div>
            <div className="howToUse">
              <Accordion title="사용방법" content={menual} />
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
