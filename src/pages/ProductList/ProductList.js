import React, { useEffect, useState, useRef } from 'react';
import Modal from './Modal';
import AllProductList from './AllProductList';
import ProductListSlider from './ProductListSlider';
import './ProductList.scss';
import './Modal.scss';

function ProductList() {
  //제품 정보 가져오기 (완성)
  const [productInfoList, setProductInfoList] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.52.80:3000/product`)
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
  const productListContainerRef = useRef(null);

  const [index, setIndex] = useState(0);

  const handleSlideLeft = () => {
    if (index < 1) return;
    setIndex(prev => prev - 1);
  };

  const handleSlideRight = () => {
    if (index >= productInfoList.length - 4) return;
    setIndex(prev => prev + 1);
  };

  useEffect(() => {
    productListContainerRef.current.style.transform = `translateX(${
      index * -15
    }%)`;
  }, [index]);

  return (
    <>
      <div className="productList">
        <button type="button" className="slideLeft" onClick={handleSlideLeft} />
        <div className="productListContainer" ref={productListContainerRef}>
          {productInfoList.map(
            ({ productId, imgUrl, enName, koName, price, size }) => (
              <ul className="productContainer" key={productId}>
                <li className="productImg">
                  <img src={imgUrl} alt="product" />
                </li>
                <div className="productDetailWrap">
                  <li className="newProduct">신제품</li>
                  <li className="productEng">{enName}</li>
                  <li className="productKor">{koName}</li>
                  <div className="priceNsize">
                    <li className="priceTag">₩{price}</li>
                    <li className="sizeTag">{size}</li>
                  </div>
                  <div className="openModal">
                    <button
                      type="button"
                      className="previewProduct"
                      onClick={() => handleModal(productId)}
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
      {/* <ProductListSlider /> */}
      <AllProductList />
    </>
  );
}

export default ProductList;
