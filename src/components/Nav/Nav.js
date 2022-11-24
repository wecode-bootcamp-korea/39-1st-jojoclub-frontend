import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SCENTS_LIST, ITEMS_LIST } from './navData';
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
            <span className="material-symbols-outlined">search</span>
          </Link>
          <Link to="/login">
            <span className="material-symbols-outlined">person</span>
          </Link>
          <Link to="/shopping">
            <span className="material-symbols-outlined">shopping_bag</span>
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
                {SCENTS_LIST.map(
                  ({ id, imgSrc, imgAlt, title, list, scentEng }) => {
                    return (
                      <Link to={`/scentList/${id}?scent[]=${imgAlt}`} key={id}>
                        <img className="scent" src={imgSrc} alt={imgAlt} />
                        <h2>{title}</h2>
                        {list.map(text => {
                          return <p key={text}>{text}</p>;
                        })}
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
          </nav>
          <div className={`dropmenu ${isProductsOpen ? 'active' : 'inactive'}`}>
            <div className="scents">
              {ITEMS_LIST.map(({ id, imgSrc, imgAlt, title, list }) => {
                return (
                  <Link to="/productList" key={id}>
                    <img className="scent" src={imgSrc} alt={imgAlt} />
                    <h2>{title}</h2>
                    {list.map(text => {
                      return <p key={text}>{text}</p>;
                    })}
                  </Link>
                );
              })}
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
