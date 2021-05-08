import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="home-page">
      <header>
        <div className="menu-toggle">
           <a href="/some/valid/uri">
            <img src="logo" width="32px" height="32px" alt="logo"/>
           < /a>
          <div class="menu">
            <ul>
              <li><a href="/some/valid/uri">Главная< /a>< /li>
              <li><a href="/some/valid/uri">Быстрый тест< /a>< /li>
              <li><a href="/some/valid/uri">Настройки< /a>< /li>
              <li><a href="/some/valid/uri">Статистика< /a>< /li>
              <li><a href="/some/valid/uri">Автотест< /a>< /li>
              <li><a href="/some/valid/uri">Тест с интервьюером< /a>< /li>
              <li><a href="/some/valid/uri">Результаты теста< /a>< /li>
            </ul>
          < /div>
          <h1> Tec interview helper < /h1>
        < /div>
        <div>
          <span>Theme switcher< /span>
        < /div>
        <div>
          <span>Sign-Up< /span>
        < /div>
      < /header>
      <main>
        <div>
          RUN TEST
        < /div>
      < /main>
    < /div>
   
  )
  
  
}
  
ReactDOM.render(< App />, document.getElementById("root"));