import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

  useEffect(() => {
    fetch('/data/itemlist.json')
      .then(response => response.json())
      .then(data => setItemInfo(data));
  }, []);

  //filtering 기능

  // const setSortParams = e => {
  //   if (checkState[e.target.value] === true) {
  //     searchParams.append('scent', e.target.value);
  //   }
  //   setSearchParams(searchParams);
  // };

  //장바구니 담기
  // const componentDidMount = () => {
  //   fetch(`${API}/cart`, {
  //     headers: {
  //       Authorization: localStorage.getItem('token'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => this.setState({ carts: res.carts }));
  // };

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
              <img className="itemimg" src={itemdata.image_url} alt="item" />
              <div className="krname">{itemdata.koName}</div>
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
