import React from "react";
import MenuToggleItem from "../menu-toggle-item/menu-toggle-item";
const MenuToggle = () => {
  return (
    <div className="menu">
      <ul>
        <li><MenuToggleItem url="/some/valid/uri" label="Главная"/>< /li>
        <li><MenuToggleItem url="/some/valid/uri" label="Быстрый тест"/>< /li>
        <li><MenuToggleItem url="/some/valid/uri" label="Настройки"/>< /li>
        <li><MenuToggleItem url="/some/valid/uri" label="Статистика"/>< /li>
        <li><MenuToggleItem url="/some/valid/uri" label="Автотест"/>< /li>
        <li><MenuToggleItem url="/some/valid/uri" label="Тест с интервьюером"/>< /li>
        <li><MenuToggleItem url="/some/valid/uri" label="Результаты теста"/>< /li>
      </ul>
    < /div>
  )
};

export default MenuToggle;