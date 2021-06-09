import React from 'react';
import './pop-up-run-test.scss'
import Button from '../button';

const PopUpRunTest = () => {
  return (
    <div className="modal" id="myModal" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <Button onClick={() => {console.log("btn btn-close крест!!!");}} className="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></Button>
          </div>
          <div class="modal-body">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          <div class="modal-footer">
            <Button onClick={() => {console.log("btn Save changes!!!");}} className="btn-blue">Save changes</Button>
            <Button onClick={() => {console.log("btn Close!!!");}} className="btn-gray" data-bs-dismiss="modal">Close</Button>
          </div>

        </div>
      </div>
    </div>
  )
};

export default PopUpRunTest;