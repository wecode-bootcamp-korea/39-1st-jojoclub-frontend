import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Mypage.scss';

export default function Mypage() {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    fetch('api주소', {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(response => response.json())
      .then(data => setUserInfo(data));
  }, []);

  const addressFetchFunction = () => {
    fetch('http://10.58.52.180:3000/users/address', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY2ODk1MjQyNX0.QCBUGO4y1EOTBi8CBAbAYn7QBXYcs5keHQ4JwsqwvxU',
      },
      body: JSON.stringify({ address: userAddress }),
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error('error');
        }
        return res.json();
      })
      .catch(err => {
        alert('주소를 입력해주세요.');
      })
      .then(data => {
        Navigate('/');
      });
  };

  const [userAddress, setUserAddress] = useState('');
  const handleUserAddress = e => {
    setUserAddress(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const [form, setForm] = useState({
    year: '2022',
    month: '01',
    day: '01',
  });

  const now = new Date();
  let years = [];
  for (let y = now.getFullYear(); y >= 1930; y -= 1) {
    years.push(y);
  }
  let months = [];
  for (let m = 1; m <= 12; m += 1) {
    if (m < 10) {
      months.push('0' + m.toString());
    } else {
      months.push(m.toString());
    }
  }
  let days = [];
  let date = new Date(form.year, form.month, 0).getDate();
  for (let d = 1; d <= date; d += 1) {
    if (d < 10) {
      days.push('0' + d.toString());
    } else {
      days.push(d.toString());
    }
  }

  return (
    <div className="mypage">
      <div className="leftMenu">
        <p className="mypageTab">마이페이지</p>
        <Link to="/" className="logout" onClick={handleLogout}>
          로그아웃
        </Link>
        <ul className="menuList">
          <Link to="/mypage">
            <li>회원정보 입력</li>
          </Link>
          <Link to="/shopping">
            <li>장바구니</li>
          </Link>
          <Link to="/order">
            <li>주문내역 보기</li>
          </Link>
        </ul>
        <div className="customerManagement">
          <p>고객관리 지원팀</p>
          <div>
            문의 사항이 있으시거나 고객관리지원팀과 상담을 원하실 경우 이메일
            문의 서비스로 보내주시면 응대를 도와드리겠습니다. 도움이 필요하시면
            고객관리지원팀으로 문의 바랍니다. 보다 신속하게 응대를
            도와드리겠습니다. 감사합니다.
          </div>
        </div>
      </div>

      <div className="rightAddress">
        <div className="completeSignup">회원가입 완료</div>
        <div className="additionalInfo">
          <p>회원가입이 완료되었습니다.</p>
          <p>
            추가 선택 정보를 기입하시려면 아래 배송지 및 생일 등 선택 정보를
            업데이트 하여 주십시오.
          </p>
          <div className="personalInfo">
            <p className="personalInfoManagementFont">개인정보 관리</p>
            <p>이름:</p>
            <p>{userInfo.name}</p>
            <p>이메일 주소:</p>
            <p>{userInfo.email}</p>
            <p>휴대전화 번호:</p>
            <p>{userInfo.phoneNumber}</p>
            <div>
              <input
                className="passwordChange"
                type="password"
                placeholder="●●●●●●●●●●"
                disabled
              />
              <span className="passwordChangeFont">비밀번호 재설정</span>
            </div>
            <p>영문 대문자, 소문자, 숫자, 특수문자 혼합 8자 이상 조합</p>
          </div>
          <div className="address">
            <p className="addressFont">주소</p>
            <div className="inputAddress">
              <input
                id="address"
                type="address"
                placeholder=" "
                value={userAddress}
                onChange={handleUserAddress}
              />
              <label for="address">* 주소</label>
            </div>
          </div>
          <div className="additionalInformation">
            <p className="additionalInformationFont">추가정보(선택)</p>
            <p>고객님의 생일은 언제입니까?</p>
            <div className="birthday">
              <select
                value={form.year}
                onChange={e => setForm({ ...form, year: e.target.value })}
              >
                {years.map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <select
                value={form.month}
                onChange={e => setForm({ ...form, month: e.target.value })}
              >
                {months.map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <select
                value={form.day}
                onChange={e => setForm({ ...form, day: e.target.value })}
              >
                {days.map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <p>성별</p>
            <label>
              <input type="radio" name="gender" /> 여성
            </label>
            <label>
              <input type="radio" name="gender" /> 남성
            </label>
          </div>
          <button className="confirmBtn" onClick={addressFetchFunction}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
