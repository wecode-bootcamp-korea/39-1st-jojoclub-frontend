import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <div className="nav">
      <nav className="navigate">
        <ul>
          <Link to="/productList">
            <li
              className="menu"
              onMouseEnter={() => {
                setIsOpen(true);
                setIsStoryOpen(false);
              }}
            >
              쇼핑하기
            </li>
          </Link>
          <Link to="/">
            <li
              className="menu"
              onMouseEnter={() => {
                setIsStoryOpen(true);
                setIsOpen(false);
              }}
            >
              위 말론 선릉 하우스
            </li>
          </Link>
        </ul>
        <Link to="/main">
          <img className="logo" src="/images/nav/title.png" alt="brand" />
        </Link>
        <div className="icons">
          <Link to="/">
            <span className="icon" class="material-symbols-outlined">
              search
            </span>
          </Link>
          <Link to="/login">
            <span className="icon" class="material-symbols-outlined">
              person
            </span>
          </Link>
          <Link to="/shopping">
            <span className="icon" class="material-symbols-outlined">
              shopping_bag
            </span>
          </Link>
        </div>
      </nav>
      <div
        onMouseLeave={() => {
          setIsOpen(false);
          setIsProductsOpen(false);
        }}
      >
        <div className="dropmenuall">
          <nav className={`hovernav ${isOpen ? 'active' : 'inactive'}`}>
            <ul className="secondmenulist">
              <Link to="/productList">
                <li
                  className="secondmenu"
                  onMouseEnter={() => {
                    setIsProductsOpen(false);
                  }}
                >
                  센트
                </li>
              </Link>
              <Link to="/productList">
                <li
                  className="secondmenu"
                  onMouseEnter={() => {
                    setIsProductsOpen(true);
                  }}
                >
                  제품유형
                </li>
              </Link>
            </ul>
            <div
              className={`dropmenu ${isProductsOpen ? 'inactive' : 'active'}`}
            >
              <div className="scents">
                <Link to="/productList">
                  <img
                    className="scent"
                    src="/images/nav/yellow.jpg"
                    alt="scent"
                  />
                  <h2>시트러스</h2>
                  <p>라임 바질 앤 마다린</p>
                  <p>그레이프프루트</p>
                  <p>얼 그레이 앤 큐컴버</p>
                </Link>
                <Link to="/productList">
                  <img
                    className="scent"
                    src="/images/nav/orange.jpg"
                    alt="scent"
                  />
                  <h2>프루티</h2>
                  <p>잉글리쉬 페어 앤 프리지아</p>
                  <p>블랙베리 앤 베이</p>
                  <p>넥타린 블로썸 앤 허니</p>
                </Link>
                <Link to="/productList">
                  <img
                    className="scent"
                    src="/images/nav/purple.jpg"
                    alt="scent"
                  />
                  <h2>라이트 플로랄</h2>
                  <p>피그 앤 로터스 플라워</p>
                  <p>와일드 블루벨</p>
                  <p>레드 로즈</p>
                </Link>
                <Link to="/productList">
                  <img
                    className="scent"
                    src="/images/nav/pink.jpg"
                    alt="scent"
                  />
                  <h2>플로랄</h2>
                  <p>피오니 앤 블러쉬 스웨이드</p>
                  <p>오렌지 블로썸</p>
                  <p>허니서클 앤 다바나</p>
                </Link>
                <Link to="/productList">
                  <img
                    className="scent"
                    src="/images/nav/green.jpg"
                    alt="scent"
                  />
                  <h2>스파이시</h2>
                  <p>앰버 앤 라벤더</p>
                  <p>잉글리쉬 오크 앤 헤이즐넛</p>
                  <p>바닐라 앤 아니스</p>
                </Link>
              </div>
            </div>
          </nav>
          <div className={`dropmenu ${isProductsOpen ? 'active' : 'inactive'}`}>
            <div className="scents">
              <Link to="/productList">
                <img
                  className="scent"
                  src="/images/nav/perfume.jpg"
                  alt="scent"
                />
                <h2>코롱</h2>
                <p>코롱</p>
                <p>솔리드 센트</p>
              </Link>
              <Link to="/productList">
                <img className="scent" src="/images/nav/body.jpg" alt="scent" />
                <h2>배스 앤 샤워</h2>
                <p>바디 앤 핸드워시</p>
                <p>바디 스크럽</p>
                <p>샤워 젤</p>
              </Link>
              <Link to="/productList">
                <img
                  className="scent"
                  src="/images/nav/bodycare.jpg"
                  alt="scent"
                />
                <h2>바디 케어</h2>
                <p>바디 크림</p>
                <p>바디 앤 핸드 로션</p>
                <p>바디 스크럽</p>
              </Link>
              <Link to="/productList">
                <img
                  className="scent"
                  src="/images/nav/facecare.jpg"
                  alt="scent"
                />
                <h2>페이스 케어</h2>
                <p>립케어</p>
              </Link>
            </div>
          </div>

          <div
            className={`story ${isStoryOpen ? 'active' : 'inactive'}`}
            onMouseLeave={() => {
              setIsStoryOpen(false);
            }}
            onMouseEnter={() => {
              setIsProductsOpen(false);
            }}
          >
            <Link to="/">
              <li className="secondmenu">스토리</li>
            </Link>
            <Link to="/" className="storymenu">
              <img
                className="wecode"
                src="/images/nav/wecode.png"
                alt="wecode"
              />
              <p>완벽한 선물</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
