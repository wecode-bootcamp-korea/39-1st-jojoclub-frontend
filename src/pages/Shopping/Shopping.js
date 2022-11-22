import React, { useEffect, useState } from 'react';

const Shopping = ({ productInfo }) => {
  const [productInfoList, setProductInfoList] = useState([]);

  useEffect(() => {
    fetch(`/프로덕트api주소 ${productInfo}.json`)
      .then(res => res.json())
      .then(data => setProductInfoList(data));
  }, [productInfo]);
  console.log(productInfo);
  console.log(productInfoList);

  return <p>Hi</p>;
};

export default Shopping;
