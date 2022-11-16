import React from 'react';
import './Products.scss';

function Products() {
  return (
    <div className="products">
      <div className="info">
        <div className="section">
          <div className="leftColumn">
            <div className="imgBox">
              <img src="/images/products/jo_sku_LGN901_1000x1000_0.avif" />
              <div className="pagenation">
                <li />
                <li />
              </div>
            </div>
            <div className="share">
              <span className="btnShare">공유하기</span>
            </div>
          </div>
          <div className="rightColumn">
            <p className="textBadge">신제품</p>
            <p className="productNameEn">Pine & Eucalyptus Home Candle</p>
            <p className="productNameKr">파인 앤 유칼립투스 홈 캔들</p>
            <p className="price">₩103,000</p>
            <p className="firstReview">첫 리뷰 쓰기</p>
            <p className="description">
              크리스마스 컬렉션 아로마틱한 파인과 생기 넘치는 유칼립투스가
              선사하는 활기찬 기운. 크리스마스 아침의 향으로 더욱 행복한
              분위기를 연출해 보세요. 영국의 전원에서 스노우볼이 각인된
              디자인으로 제작되었습니다. 약 45시간 동안 태울 수 있으며 캔들
              리드도 포함되어 있습니다. 캔들 사이즈는 높이
            </p>
            <button className="btnMore" />
            <div className="sizeThumbnails">
              <div className="sizePicker">
                <img src="/images/products/jo_sku_LGN901_100x100_0.avif" />
              </div>
            </div>

            <button className="btn">장바구니 담기</button>
            <button className="btnWish">위시리스트</button>
          </div>
          <div className="contents">
            <div className="ingredients">
              <h2>성분</h2>
              <p>
                주요물질:미네랄오일,향료 (리모넨 등) / 신고번호: HB20-26-0299
                *제공된 성분은 동일 제품이라도 경우에 따라 변경될 수 있습니다.
                최신정보는 제품 포장의 성분을 참고하시거나 본사
                고객관리지원팀으로 연락 부탁 드립니다.
              </p>
            </div>
            <h3>
              조 말론 런던의 제품을 구성하는 성분은 변경될 수 있음을
              알려드립니다. 제품 뒷면의 성분 목록을 확인하시면 가장 최신
              성분표를 확인하실 수 있습니다.
            </h3>
            <div className="usage">
              <h2>사용방법</h2>
              <p>
                왁스의 터널링 현상없이 최적의 사용을 위해, 처음 캔들을 사용할 때
                충분하게 태워서 글래스 가장자리까지 왁스가 녹도록 태워줍니다.
                사용 후에는 캔들 리드를 덮어 불을 꺼 주시고, 다시 사용할 때는
                왁스가 완전히 굳었는지 확인해 주세요. 캔들 심지는 사용 시 마다
                잘라주어 6mm 정도 길이를 유지해줍니다. 캔들이 올려진 공간은
                안전하게 관리해 주세요. 한번 사용할 때 4시간 이상 연속 사용을
                피해 주시고, 어린이나 반려 동물이 닿지 않는 곳에 보관해 주세요.
              </p>
            </div>
          </div>
        </div>
        <div className="list">
          <p>배너</p>
          <p>당신을 위한 추천 상품</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
