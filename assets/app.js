import React from 'react';
import ReactDOM from 'react-dom';

import ScrollBar from './components/ScrollBar';
import ProgBar from './components/ProgBar';
import PageTop from './components/PageTop';

ReactDOM.render(
  <div>
    <ScrollBar />
    <ProgBar />
    <PageTop />
  </div>,
  document.getElementById('React'),
);
