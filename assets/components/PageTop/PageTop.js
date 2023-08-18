import React from 'react';
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
      PageTop
    </button>
  );
}

export default PageTop;
