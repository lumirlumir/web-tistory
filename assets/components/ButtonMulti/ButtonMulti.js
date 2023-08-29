import React, { useState } from 'react';
import './ButtonMulti.scss';
import ButtonSingle from '../ButtonSingle';

function ButtonMulti(props) {
  /* Variables */
  // props
  const { children, title, position, top, right, bottom, left } = props;

  // children
  const childrenButtonSingle = [];
  const childrenIcon = [];
  React.Children.toArray(children).forEach(el => {
    if (el.type.name === 'ButtonSingle') {
      childrenButtonSingle.push(el);
    } else {
      childrenIcon.push(el);
    }
  });

  // state
  const [visible, setVisible] = useState(false);

  /* Return */
  return (
    <>
      <ButtonSingle
        click={() => {
          setVisible(!visible);
        }}
        title={title}
        position={position}
        top={top}
        right={right}
        bottom={bottom}
        left={left}
      >
        {childrenIcon}
      </ButtonSingle>

      {visible && childrenButtonSingle}
    </>
  );
}

export default ButtonMulti;
