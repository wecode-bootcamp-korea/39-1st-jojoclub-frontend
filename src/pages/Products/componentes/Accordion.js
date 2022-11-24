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
            setCheck(prev => !prev);
          }}
        >
          {isCheck ? (
            <span class="material-symbols-outlined">expand_less</span>
          ) : (
            <span class="material-symbols-outlined">expand_more</span>
          )}
        </button>
      </div>

      {isCheck && <p className="contentBody">{content}</p>}
    </>
  );
}

export default Accordion;
