import React, { useEffect, useState, useRef } from 'react';
import './ProductList.scss';
import Modal from './Modal';
import './Modal.scss';
import AllProductList from './AllProductList';
function ProductList() {
  //제품 정보 가져오기 (완성)
  const [productInfoList, setProductInfoList] = useState([]);
  useEffect(() => {
    fetch('/data/productList.json')
      .then(response => response.json())
      .then(result => setProductInfoList(result));
  }, []);
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
    productListContainerRef.current.style.transform = `translateX(${
      (index + 1) * -10
    }%)`;
    setIndex(prev => prev + 1);
  };
  const handleSlideRight = () => {
    productListContainerRef.current.style.transform = `translateX(${
      (index + 1) * 10
    }%)`;
    setIndex(prev => prev + 1);
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
        <button
          type="button"
          className="slideRight"
          onClick={handleSlideRight}
        />
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          productInfo={getInfo}
        />
      </div>
      <AllProductList />
    </>
  );
}

export default ProductList;
