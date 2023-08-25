import React from 'react';
import ReactDOM from 'react-dom';

import { FaArrowUp } from 'react-icons/fa6';
import { AiOutlineMenu } from 'react-icons/ai';

import ScrollBar from './components/ScrollBar';
import ProgBar from './components/ProgBar';
import ButtonSingle from './components/ButtonSingle';

ReactDOM.render(
  <>
    <ScrollBar />
    <ProgBar />

    <ButtonSingle
      click={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
      title="Top"
      position="fixed"
      right="40px"
      bottom="40px"
    >
      <FaArrowUp color="gray" />
    </ButtonSingle>

    <ButtonSingle
      click={() => {
        document.querySelector('body').classList.toggle('sideMenu');
      }}
      title="Menu"
      position="fixed"
      right="80px"
      bottom="40px"
    >
      <AiOutlineMenu color="gray" size={18} />
    </ButtonSingle>
  </>,

  document.getElementById('React'),
);
