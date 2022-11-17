import React from 'react';
import './Modal.scss';

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modalContainer">
        <div className="modalClose">
          <button onClick={onClose} className="closeBtn" />
        </div>
        <div className="content">제품 상세 리스트(아영님꺼 가져오기)</div>
      </div>
    </div>
  );
};

export default Modal;
