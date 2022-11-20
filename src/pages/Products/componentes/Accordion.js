import { useState } from 'react';
import './Accordion.scss';

function Accordion({ title, content }) {
  const [isCheck, setCheck] = useState(false);

  return (
    <>
      <div className="accordion">
        <h2 className="contentHeader">{title}</h2>
        <button
          className="accordionIcon"
          onClick={() => {
            setCheck(e => !e);
          }}
        >
          {isCheck ? '-' : '+'}
        </button>
      </div>

      {isCheck && <p className="contentBody">{content}</p>}
    </>
  );
}

export default Accordion;
