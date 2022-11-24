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
    fetch(`http://10.58.52.80:3000/product?${searchParams.toString()}`, {
      headers: { 'content-Type': 'application/json;charset=utf-8' },
    })
      .then(response => response.json())
      .then(data => setItemInfo(data));
  }, [searchParams]);
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
            <div className="itemid" key={itemdata.id}>
              <Link to={`/product/${itemdata.id}`}>
                <img
                  className="itemimg"
                  src={itemdata.options[0].img}
                  alt="item"
                />
                <div className="krname">{itemdata.koName}</div>
              </Link>
              <div className="engname">{itemdata.enName}</div>
              <div className="price">₩{itemdata.price}</div>
              <div className="shopbtn">
                <button>장바구니 담기</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScentList;
