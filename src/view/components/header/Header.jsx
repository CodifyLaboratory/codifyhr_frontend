import { useState } from "react";
import css from "./header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import close from "../../../assets/close.png";
import { ModalAuth } from "../modalAuth/ModalAuth";

export const Header = (props) => {
  const [burger, setBurger] = useState(false);
  const [modal, setModal] = useState(true);
  const activeBurger = () => setBurger((p) => !p);
  console.log(modal);
  return (
    <div className={css.header}>
      {modal === false ? (
        <></>
      ) : (
        <ModalAuth
          authUser={props.authUser}
          auth={props.auth}
          setAuth={props.setAuth}
          setModal={setModal}
        />
      )}

      <nav className="container">
        <div className={css.logo}>
          <div onClick={activeBurger} className={css.burger}>
            <div className={css.burgerLine}></div>
            <div className={css.burgerLine}></div>
            <div className={css.burgerLine}></div>
          </div>
          <div
            className={`${css.burgerContent} ${
              burger ? css[`burgerOpen`] : {}
            }`}
          >
            <div onClick={activeBurger} className={css.close}>
              <img src={close} alt="img" />
            </div>
            <Link onClick={activeBurger} className={`${css.link} `} to={"/"}>
              <img
                className={`${css.logoIcon} ${css.logoIconSize}`}
                src={Logo}
                alt=""
              />
            </Link>
            <div className={css.burgerLinks}>
              <Link onClick={activeBurger} className={css.link} to="/personal">
                <p className={`${css.userText} ${css.burgerLink}`}>
                  Личный кабинет
                </p>
              </Link>
              <Link onClick={activeBurger} className={css.link} to="/resume">
                <button
                  className={`${css.navItem} ${css.blackLink}  ${css.burgerLink}`}
                >
                  Спиcок резюме
                </button>
              </Link>
              <Link onClick={activeBurger} className={css.link} exact to="/get">
                <li
                  className={`${css.navItem} ${css.blueLink} ${css.burgerLink}`}
                >
                  Получить консультацию
                </li>
              </Link>
            </div>
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
            {props.auth === null ? (
              <></>
            ) : (
              <Link className={css.link} to="/personal">
                <p className={css.userText}>Личный кабинет</p>
              </Link>
            )}
          </p>
        </div>
      </nav>
    </div>
  );
};
