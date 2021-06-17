import React, { Component } from 'react';
import Portal from '../portal';

import './modal-button.scss';


const ModalButton = ({
   isOpen, children,
}) => {

  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
                {children}
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

export default ModalButton;
