import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="listWrap">
        {FOOTER_LIST.map(({ id, title, list }) => {
          return (
            <div className="listBox" key={id}>
              <p className="listName">{title}</p>
              <ul>
                {list.map(text => {
                  return <li key={text}>{text}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="bottomText">
        <p>© We Malone Korea 2022</p>
        <p>서울특별시 강남구 테헤란로 427, 10층(삼성동)</p>
        <p>jojoclub</p>
      </div>
    </div>
  );
}

export default Footer;

const FOOTER_LIST = [
  {
    id: 1,
    title: '고객 서비스',
    list: [
      '자주 묻는 질문',
      '고객관리지원팀',
      '나의 프로필',
      '나의 오더',
      '주문 조회',
      '교환 및 환불 규정',
      '온라인 부티크 쇼핑',
    ],
  },
  {
    id: 2,
    title: '회사 소개',
    list: ['법인 정보', '커리어'],
  },
  {
    id: 3,
    title: '소셜 네트워크',
    list: ['인스타그램', '페이스북', '유튜브'],
  },
];
