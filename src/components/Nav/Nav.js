import React, { useState } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  return (
    <div>
      <nav className="navigate">
        <ul>
          <Link to="/productList">
            <li
              className="menu"
              onMouseEnter={() => {
                setOpen(true);
                setStoryOpen(false);
              }}
            >
              쇼핑하기
            </li>
          </Link>
          <Link to="/">
            <li
              className="menu"
              onMouseEnter={() => {
                setStoryOpen(true);
                setOpen(false);
              }}
            >
              위 말론 선릉 하우스
            </li>
          </Link>
        </ul>
        <Link to="/main">
          <img className="logo" src="/images/nav/logo.png" alt="brand" />
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
          <Link to="/">
            <span className="icon" class="material-symbols-outlined">
              bookmark
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
          setOpen(false);
          setProductsOpen(false);
        }}
      >
        <nav className={`hovernav ${open ? 'active' : 'inactive'}`}>
          <ul className="secondmenulist">
            <Link to="/shopping">
              <li
                className="secondmenu"
                onMouseEnter={() => {
                  setProductsOpen(false);
                }}
              >
                센트
              </li>
            </Link>
            <Link to="/shopping">
              <li
                className="secondmenu"
                onMouseEnter={() => {
                  setProductsOpen(true);
                }}
              >
                제품유형
              </li>
            </Link>
          </ul>
          <div className={`${productsOpen ? 'inactive' : 'active'}`}>
            <div className="scents">
              <Link to="/shopping">
                <div className="citrus">
                  <img
                    className="scent"
                    src="/images/nav/Citrus.webp"
                    alt="scent"
                  />
                  <h2>시트러스</h2>
                  <p>라임 바질 앤 마다린</p>
                  <p>그레이프프루트</p>
                  <p>얼 그레이 앤 큐컴버</p>
                </div>
              </Link>
              <Link to="/shopping">
                <div className="fruity">
                  <img
                    className="scent"
                    src="/images/nav/Fruity.webp"
                    alt="scent"
                  />
                  <h2>프루티</h2>
                  <p>잉글리쉬 페어 앤 프리지아</p>
                  <p>블랙베리 앤 베이</p>
                  <p>넥타린 블로썸 앤 허니</p>
                </div>
              </Link>
              <Link to="/shopping">
                <div className="lightfloral">
                  <img
                    className="scent"
                    src="/images/nav/lightFloral.webp"
                    alt="scent"
                  />
                  <h2>라이트 플로랄</h2>
                  <p>피그 앤 로터스 플라워</p>
                  <p>와일드 블루벨</p>
                  <p>레드 로즈</p>
                </div>
              </Link>
              <Link to="/shopping">
                <div className="floral">
                  <img
                    className="scent"
                    src="/images/nav/Floral.webp"
                    alt="scent"
                  />
                  <h2>플로랄</h2>
                  <p>피오니 앤 블러쉬 스웨이드</p>
                  <p>오렌지 블로썸</p>
                  <p>허니서클 앤 다바나</p>
                </div>
              </Link>
              <Link to="/shopping">
                <div className="spicy">
                  <img
                    className="scent"
                    src="/images/nav/Spicy.webp"
                    alt="scent"
                  />
                  <h2>스파이시</h2>
                  <p>앰버 앤 라벤더</p>
                  <p>잉글리쉬 오크 앤 헤이즐넛</p>
                  <p>바닐라 앤 아니스</p>
                </div>
              </Link>
            </div>
          </div>
        </nav>
        <div className={`productsmenu ${productsOpen ? 'active' : 'inactive'}`}>
          <div className="scents">
            <Link to="/shopping">
              <div className="citrus">
                <img
                  className="scent"
                  src="/images/nav/Colognes.webp"
                  alt="scent"
                />
                <h2>코롱</h2>
                <p>코롱</p>
                <p>솔리드 센트</p>
              </div>
            </Link>
            <Link to="/shopping">
              <div className="fruity">
                <img
                  className="scent"
                  src="/images/nav/BathShower.webp"
                  alt="scent"
                />
                <h2>배스 앤 샤워</h2>
                <p>바디 앤 핸드워시</p>
                <p>바디 스크럽</p>
                <p>샤워 젤</p>
              </div>
            </Link>
            <Link to="/shopping">
              <div className="lightfloral">
                <img
                  className="scent"
                  src="/images/nav/Bodycare.webp"
                  alt="scent"
                />
                <h2>바디 케어</h2>
                <p>바디 크림</p>
                <p>바디 앤 핸드 로션</p>
                <p>바디 스크럽</p>
              </div>
            </Link>
            <Link to="/shopping">
              <div className="floral">
                <img
                  className="scent"
                  src="/images/nav/Facecare.webp"
                  alt="scent"
                />
                <h2>페이스 케어</h2>
                <p>립케어</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`story ${storyOpen ? 'active' : 'inactive'}`}
        onMouseLeave={() => {
          setStoryOpen(false);
        }}
        onMouseEnter={() => {
          setProductsOpen(false);
        }}
      >
        <Link to="/shopping">
          <li className="secondmenu">스토리</li>
        </Link>
        <Link to="/">
          <div className="storymenu">
            <img className="wecode" src="/images/nav/wecode.png" alt="wecode" />
            <p>완벽한 선물</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
