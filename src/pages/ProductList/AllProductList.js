import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Modal from './Modal';
import './Modal.scss';
import './ProductList.scss';

const AllProductList = () => {
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
  //필터링 (완성)
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
      <div className="allProductListTitle"> 전체 아이템 보기</div>
      <div className="filterWrap">
        <div className="checkboxWrap">
          <input
            type="checkbox"
            name="scent[]"
            value="citrus"
            onChange={handleCheckbox}
          />
          시트러스
        </div>
        <div className="checkboxWrap">
          <input
            type="checkbox"
            name="scent[]"
            value="fruity"
            onChange={handleCheckbox}
          />
          프루티
        </div>
        <div className="checkboxWrap">
          <input
            type="checkbox"
            name="scent[]"
            value="floral"
            onChange={handleCheckbox}
          />
          플로럴
        </div>
        <div className="checkboxWrap">
          <input
            type="checkbox"
            name="scent[]"
            value="lightfloral"
            onChange={handleCheckbox}
          />
          라이트 플로럴
        </div>
        <div className="checkboxWrap">
          <input
            type="checkbox"
            name="scent[]"
            value="spicy"
            onChange={handleCheckbox}
          />
          스파이시
        </div>
        <div className="checkboxWrap">
          <input
            type="checkbox"
            name="gender[]"
            value="men"
            onChange={handleCheckbox}
          />
          남자
        </div>
        <div className="checkboxWrap">
          <input
            type="checkbox"
            name="gender[]"
            value="women"
            onChange={handleCheckbox}
          />
          여자
        </div>
      </div>
      <div className="allProductListContainer">
        {productInfoList.map(({ id, img, enName, koName, price, size }) => (
          <ul className="productContainer" key={id}>
            <li className="productImg">
              <img src={img} alt="product" />
            </li>
            <div className="productDetailWrap">
              <li className="newProduct">신제품</li>
              <li className="productEng">{enName}</li>
              <li className="productKor">{koName}</li>
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
        ))}
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        productInfo={getInfo}
      />
    </>
  );
};

export default AllProductList;
