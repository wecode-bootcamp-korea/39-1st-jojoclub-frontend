import React from 'react';
import './Search.scss';

function Search() {
  return (
    <div className="searchPage">
      <div className="pageWrap">
        <div className="searchBox">
          <input
            className="search"
            type="text"
            placeholder="찾으시는 상품을 입력하여주세요."
          />
          <button className="searchBtn">검색</button>
        </div>
        <div className="categoryBox">
          <p className="text">검색어에 대한 n개 결과</p>
          <div className="category">카테고리 필터 컴포넌트</div>
        </div>
        <div className="listBox">
          <div className="productList">상품 리스트 컴포넌트</div>
        </div>
      </div>
    </div>
  );
}

export default Search;
