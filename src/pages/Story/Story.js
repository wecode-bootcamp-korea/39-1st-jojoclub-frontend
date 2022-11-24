import React from 'react';
import { Link } from 'react-router-dom';
import './Story.scss';

function Story() {
  return (
    <div className="storyPage">
      <div className="pageNav">
        <ol className="category">
          <li className="cateList">
            <Link to="/" title="홈" className="home">
              홈
            </Link>
          </li>
          <p>/</p>
          <li className="cateList">
            <Link to="/" title="스토리" className="story">
              스토리
            </Link>
          </li>
        </ol>
      </div>
      <div className="contentBlock">
        <div className="splitText">
          <div className="textColumn">
            <h2 className="columnTextH2">
              스택오버플로우에서 궁금한 점을 물어보세요!
            </h2>
          </div>
          <div className="textColumn">
            <p className="columnTextBody">
              프론트엔드 개발을 하다 보면 UI 구성에 필요한 데이터들이 생길 때가
              있습니다. UI 구성에는 필요하지만 동적으로 변하지 않기 때문에
              백엔드 API를 통해 가져오지 않는 데이터가 있을 수도 있고, 매번
              동적으로 변하기 때문에 반드시 백엔드 API를 통해 가져와야만 하는
              데이터가 있을 수도 있습니다. 또한, 백엔드 API가 준비되기 전에
              데이터 기반으로 UI를 미리 구성하고 싶을 때도 있습니다. 이번
              시간에는 정적인 UI를 구성하기 위한 상수 데이터와 API 통신을
              모방하기 위한 Mock Data를 어떻게 상황에 맞게 활용하는지
              알아보겠습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="contentBlock">
        <img className="mediaAsset" src="/images/story/m.jpg" />
      </div>
      <div className="contentBlock">
        <div className="textTout">
          <h2 className="columnTextCenterH2">
            나는 문어~ 꿈을 꾸는 문어~~ 행복해 아마도 행복해 하지만 행복해
            그래도 행복해~ 나는 문어~ 꿈을 꾸는 문어~~ 행복해 아마도 행복해
            하지만 행복해 그래도 행복해~
          </h2>
        </div>
      </div>
      <div className="contentBlock">
        <div className="splitText">
          <div className="textColumn">
            <p className="columnTextBody">
              프론트엔드 개발을 진행하다 보면, UI 구성에 필요한 백엔드 API가
              완성되지 않은 상황에서 개발을 진행해야 할 수도 있습니다. 이러한
              경우에는 백엔드에서 API가 완성될 때까지 무작정 기다리는 게 아니라,
              데이터가 들어오는 상황에 대비해 의도한 대로 UI가 구현되는지
              확인해야 합니다. 이때 사용되는 데이터가 Mock(모조, 거짓)
              Data입니다.백엔드 API가 미완성인 상황에서 Mock Data를 사용하지
              않는다면, 대부분은 실제 데이터가 들어올 부분들을 하드코딩으로
              대체하고 작업을 진행하게 될 것입니다. 이처럼 Mock Data의 사용 없이
              개발을 진행한다면 여러 문제가 발생할 수 있습니다. 우선 개발이
              진행됨에 따라 코드가 많이 확장된 상태이기 때문에, 백엔드 API가
              완성되고 실제 데이터를 반영하는 작업을 수행할 때 번거로울 수
              있습니다. 또한, 실제 데이터에서는 존재하지 않는 값을 토대로 UI를
              그렸거나, 반대로 실제 데이터를 기반으로 작업해야 하는 내용이
              누락되었을 수도 있습니다.
            </p>
          </div>
          <div className="textColumn">
            <p className="columnTextBody">
              프로그래밍에서는 Side Effect라는 용어가 있습니다. 익숙한 뜻으로
              번역하자면 부작용 정도의 의미로 번역이 되는데 프로그래밍에서
              부작용은 무엇을 의미할까요? 일상생활에서 접하는 부작용 이란 단어의
              어감은 다소 부정적입니다. 우리는 흔히 “약을 먹었는데 부작용이
              있다"라는 문장처럼 부정적인 뉘앙스로 부작용이란 단어를 사용합니다.
              좀 더 풀어서 이해해 보자면 부작용은 부수효과라고도 표현할 수
              있습니다. 부수효과란 말을 해석해 보면 주요한 효과에 따라서
              발생하는 효과라고 할 수 있습니다. 감기약의 예시로 생각해 보자면
              감기약의 주된 효과는 감기를 낫게하는 것이지만 거기에 덧붙여서
              졸음이 오는 효과 또한 따라서 발생하고 이것을 부작용이라고 합니다.
              부작용들은 부정적인 결과를 유발하는 경우가 많기에 부정적인
              뉘앙스로 인식되지만 사실 부작용은 용어 자체로 부정적인 의미를
              내포하지 않고 단지 주요한 효과 외에 부수적으로 발생하는 효과를
              의미하는 단어입니다. 그렇다면, 프로그래밍에서의 부작용은
              무엇일까요? 프로그래밍에서의 부작용 은 코드가 의도한 주된 효과
              외에 추가적으로 발생하는 효과라고 할 수 있습니다. 특히, 프로그램을
              이루는 가장 작은 단위인 함수에서 쓰이는 용어입니다. 프로그래밍에서
              함수가 하고자 하는 본질적인 역할은 무엇일까요? 함수의 주된 목적은
              Input을 받아서 output을 산출하는 것입니다. 따라서, 함수의 부작용
              이란 함수의 목적인 Input을 받아서 output을 산출하는 것 이외의 모든
              행위를 의미합니다. 몇 가지 예시와 함께 자세히 알아보겠습니다.
            </p>
          </div>
        </div>
      </div>
      <div>상품리스트 컴포넌트</div>
    </div>
  );
}

export default Story;
