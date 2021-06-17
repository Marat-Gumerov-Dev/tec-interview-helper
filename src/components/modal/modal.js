import React, { Component } from 'react';
import './modal.scss';
import Portal from '../portal';
import Button from '../button';



const Modal = ({
  title, isOpen, onCancel, onSubmit, children,
}) => {

  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">{title}</div>
              </div>
              <div className="modalBody">
                {children}
              </div>
              <div className="modalFooter">
                <Button onClick={onCancel} invert>Cancel</Button>
                <Button onClick={onSubmit}>Submit</Button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

export default Modal;
