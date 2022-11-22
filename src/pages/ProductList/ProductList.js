import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import './ProductList.scss';
import Modal from './Modal';
import './Modal.scss';
function ProductList() {
  //제품 정보 가져오기 (완성)
  const [productInfoList, setProductInfoList] = useState([]);
  //모달윈도우 (완성)
  const [openModal, setOpenModal] = useState(false);
  //모달로 데이터 보내기 (완성)
  const [getInfo, setGetInfo] = useState(0);
  const handleModal = id => {
    setOpenModal(true);
    setGetInfo(id);
  };
  //캐러셀 만들기 (미완)
  const productListContainerRef = useRef();
  const [index, setIndex] = useState(0);
  const handleSlideLeft = () => {
    setIndex(index + 1);
    productListContainerRef.current.style.transform = `translateX(-(25 * ${
      index + 1
    })%)`;
    console.log(index);
  };

  useEffect(() => {
    fetch('/data/productList.json')
      .then(response => response.json())
      .then(result => setProductInfoList(result));
  }, []);
  //필터링
  const [checkState, setCheckState] = useState({
    citrus: false,
    fruity: false,
    floral: false,
    lightfloral: false,
    spicy: false,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const handleCheckbox = e => {
    checkState[e.target.value] = e.target.checked;
    setCheckState({ ...checkState });
    if (e.target.checked) {
      searchParams.append(e.target.name, e.target.value);
    } else {
      const prev = searchParams.getAll(e.target.name);
      searchParams.delete(e.target.name);
      prev
        .filter(el => el !== e.target.value)
        .forEach(el => searchParams.append(e.target.name, el));
    }
    setSearchParams(searchParams);
  };
  return (
    <>
      <div className="productList">
        <button type="button" className="slideLeft" onClick={handleSlideLeft} />
        <div className="productListContainer" ref={productListContainerRef}>
          {productInfoList.map(
            ({ id, productImage, englishName, koreanName, price, size }) => (
              <ul className="productContainer" key={id}>
                <li className="productImg">
                  <img src={productImage} alt="product" />
                </li>
                <div className="productDetailWrap">
                  <li className="newProduct">신제품</li>
                  <li className="productEng">{englishName}</li>
                  <li className="productKor">{koreanName}</li>
                  <div className="priceNsize">
                    <li className="priceTag">{price}</li>
                    <li className="sizeTag">{size}</li>
                  </div>
                  <div className="openModal">
                    <button
                      type="button"
                      className="previewProduct"
                      onClick={() => handleModal(id)}
                    >
                      미리보기
                    </button>
                  </div>
                </div>
              </ul>
            )
          )}
        </div>
        <button type="button" className="slideRight" />
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          productInfo={getInfo}
        />
      </div>
      {/* 여기서부터 전체 리스트 */}
      <div className="allProductListTitle"> 전체 아이템 보기</div>
      <div>
        <input
          type="checkbox"
          name="scent[]"
          value="citrus"
          onChange={handleCheckbox}
        />
        시트러스
        <input
          type="checkbox"
          name="scent[]"
          value="fruity"
          onChange={handleCheckbox}
        />
        프루티
        <input
          type="checkbox"
          name="scent[]"
          value="floral"
          onChange={handleCheckbox}
        />
        플로럴
        <input
          type="checkbox"
          name="scent[]"
          value="lightfloral"
          onChange={handleCheckbox}
        />
        라이트 플로럴
        <input
          type="checkbox"
          name="scent[]"
          value="spicy"
          onChange={handleCheckbox}
        />
        스파이시
        <input
          type="checkbox"
          name="gender[]"
          value="men"
          onChange={handleCheckbox}
        />
        남자
        <input
          type="checkbox"
          name="gender[]"
          value="women"
          onChange={handleCheckbox}
        />
        여자
      </div>
      <div className="allProductListContainer" ref={productListContainerRef}>
        {productInfoList.map(
          ({ id, productImage, englishName, koreanName, price, size }) => (
            <ul className="productContainer" key={id}>
              <li className="productImg">
                <img src={productImage} alt="product" />
              </li>
              <div className="productDetailWrap">
                <li className="newProduct">신제품</li>
                <li className="productEng">{englishName}</li>
                <li className="productKor">{koreanName}</li>
                <div className="priceNsize">
                  <li className="priceTag">{price}</li>
                  <li className="sizeTag">{size}</li>
                </div>
                <div className="openModal">
                  <button
                    type="button"
                    className="previewProduct"
                    onClick={() => setOpenModal(true)}
                  >
                    미리보기
                  </button>
                </div>
              </div>
            </ul>
          )
        )}
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        productInfo={getInfo}
      />
    </>
  );
}

export default ProductList;
