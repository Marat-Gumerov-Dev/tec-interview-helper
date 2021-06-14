import React from "react";
import Header from '../header';
import PopUpRunTest from '../pop-up-run-test';
import Portal from "../portal";
import './home-page.scss';

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <PopUpRunTest />
      <Portal>
        <div><h1>1</h1></div>
      </Portal>
    </div>
  );
};

export default HomePage;