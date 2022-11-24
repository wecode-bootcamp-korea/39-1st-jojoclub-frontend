import React, { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import './ScentList.scss';

function ScentList() {
  //scent별 url 구분하기
  const { id } = useParams();
  const [scent, setScent] = useState({});

  useEffect(() => {
    fetch(`/data/scentdata${id}.json`)
      .then(response => response.json())
      .then(data => {
        setScent(data);
      });
  }, [id]);

  const { scentName, description, image_url } = scent;

  //item list 가져오기
  const [itemInfo, setItemInfo] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams([]);

  useEffect(() => {
    fetch(`${APIS.product}?${searchParams.toString()}`, {
      headers: { 'content-Type': 'application/json;charset=utf-8' },
    })
      .then(response => response.json())
      .then(data => setItemInfo(data));
  }, [searchParams]);

  //장바구니 담기
  const sendItem = id => {
    fetch(`${APIS.carts}`, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        productOptionId: id,
        quantity: 1,
      }),
    }).then(response => response.json());
  };

  return (
    <div className="scentlist">
      <header>
        <h1>{scentName}</h1>
        <h2>{description}</h2>
        <img src={image_url} alt="scent" />
      </header>

      <div className="itemlist">
        {itemInfo.map(itemdata => {
          return (
            <div className="itemid" key={itemdata.productId}>
              <Link to={`/product/${itemdata.productId}`}>
                <div className="imgwrap">
                  <img src={itemdata.imgUrl} alt="item" />
                </div>
                <div className="krname">{itemdata.koName}</div>
              </Link>
              <div className="engname">{itemdata.enName}</div>
              <div className="price">
                <span> ₩{itemdata.price}</span>
                <span> {itemdata.size}</span>
              </div>
              <div className="shopbtn">
                <button onClick={() => sendItem(itemdata.productId)}>
                  장바구니 담기
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScentList;
