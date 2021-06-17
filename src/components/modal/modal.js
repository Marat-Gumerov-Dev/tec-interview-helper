import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.scss';
import Portal from '../portal';
import Button from '../button';


class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      isOpen: false,
      onCancel: ()=>{},
      onSubmit: ()=>{},
      children: null,
      isButton: false,
    }
  }



  render() {
    let modalFragment = null;
    if(this.state.isButton){
      modalFragment = <Portal>
                        <div className="modalOverlay">
                          <div className="modalWindow">
                              {this.state.children}
                          </div>
                        </div>
                      </Portal>
    } else {
      modalFragment = <Portal>
                        <div className="modalOverlay">
                          <div className="modalWindow">
                            <div className="modalHeader">
                              <div className="modalTitle">{this.state.title}</div>
                            </div>
                            <div className="modalBody">
                              {this.state.children}
                            </div>
                            <div className="modalFooter">
                              <Button onClick={this.state.onCancel} invert>Cancel</Button>
                              <Button onClick={this.state.onSubmit}>Submit</Button>
                            </div>
                          </div>
                        </div>
                      </Portal>
    }
    return (
      <>
      { this.state.isOpen &&
        {modalFragment}
      }
    </>

    )
  }
}

export default Modal;
