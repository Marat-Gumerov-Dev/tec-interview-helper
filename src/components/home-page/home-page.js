import React from "react";
import Header from './../page-components/header'
import PopUpRunTest from '../pop-up-run-test';
import './home-page.scss';

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <PopUpRunTest />
    </div>
  );
};

export default HomePage;