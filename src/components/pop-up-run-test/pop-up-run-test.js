import React from 'react';
import './pop-up-run-test.scss'

const PopUpRunTest = () => {
  return (
    <div className="modal" id="myModal" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
               <span aria-hidden="true"></span>
             </button>
          </div>
          <div class="modal-body">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>

        </div>
      </div>
    </div>
  )
};

export default PopUpRunTest;