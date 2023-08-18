import React from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import './PageTop.scss';

function PageTop() {
  function scroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <button type="button" onClick={() => scroll()}>
      <FaArrowUp color="gray" />
    </button>
  );
}

export default PageTop;
