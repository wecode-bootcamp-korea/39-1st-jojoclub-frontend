import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Modal from './Modal';
// import './ProductListCopy.scss';
import './Modal.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductListCopy.scss';
//
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
}
//
function ProductListSlider() {
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
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="productListCopy">
      <div className="productListContainer">
        <Slider {...settings}>
          {productInfoList.map(
            ({ id, imgUrl, enName, koName, price, size }) => (
              <ul className="productContainer" key={id}>
                <li className="productImg">
                  <img src={imgUrl} alt="product" />
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
            )
          )}
        </Slider>
      </div>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        productInfo={getInfo}
      />
    </div>
  );
}

export default ProductListSlider;
