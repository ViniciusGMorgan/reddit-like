import React from "react";
import { useDispatch } from "react-redux";
import { ImMenu, ImSearch, ImPlus, ImImage } from "react-icons/im";
import { BsFillHexagonFill } from "react-icons/bs";
import { filter } from "../../store/modules/header/action";
import "./Header.css";

export function Header() {
  const dispatch = useDispatch();
  function handleChange(e) {
    dispatch(filter(e.target.value));
  }
  return (
    <header>
      <section className="section-1">
        <div className="relative">
          <BsFillHexagonFill size="33" color="#e3472f" />
          <div className="text-icon">UX</div>
        </div>
        <div className="line"></div>
        <div className="menu">
          <ImMenu color="#545454"></ImMenu>
        </div>
        <div className="relative">
          <input onChange={handleChange} />
          <ImSearch className="search" color="#d6d6d6" size="12"></ImSearch>
        </div>
      </section>
      <section className="section-2">
        <div className="relative">
          <button className="button-add-post">
            <span>Add Post</span>
          </button>
          <ImPlus className="plus" color="#fff" size="10"></ImPlus>
        </div>
        <div className="relative">
          <ImImage className="image" color="#d6d6d6"></ImImage>
          <div className="notification">5</div>
        </div>
      </section>
    </header>
  );
}
