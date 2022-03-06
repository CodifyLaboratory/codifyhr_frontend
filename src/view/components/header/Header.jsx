// import { useState } from "react";
import css from "./header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";

export const Header = (props) => {
  console.log(props.auth);
  return (
    <div className={css.header}>
      <nav className="container">
        <div className={css.logo}>
          <div className={css.burger}>
            <div className={css.burgerLine}></div>
            <div className={css.burgerLine}></div>
            <div className={css.burgerLine}></div>
          </div>
          <Link className={css.link} to={"/"}>
            <img className={css.logoIcon} src={Logo} alt="" />
          </Link>
        </div>
        <ul className={css.navList}>
          <Link className={css.link} to="/resume">
            <button className={`${css.navItem} ${css.blackLink}`}>
              Спиcок резюме
            </button>
          </Link>
          <Link className={css.link} exact to="/get">
            <li className={`${css.navItem} ${css.blueLink}`}>
              Получить консультацию
            </li>
          </Link>
        </ul>
        <div className={css.userItem}>
          <p className={css.textLanguage}>RU</p>
          <p className={css.userText}>
            {props.auth === null ? 
              <></>
            : 
                <Link className={css.link} to="/personal">
                  <p className={css.userText}>Личный кабинет</p>
                </Link>
            }
          </p>
        </div>
      </nav>
    </div>
  );
};
