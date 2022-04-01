import { useState } from "react";
import css from "./header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import close from "../../../assets/close.png";
import userIcon from "../../../assets/userIcon.png";
import saveIcon from "../../../assets/save2.png";
import { ModalAuth } from "../modalAuth/ModalAuth";

export const Header = (props) => {
  const [burger, setBurger] = useState(false);
  const activeBurger = () => setBurger((p) => !p);

  return (
    <div className={css.header}>
      {props.isAuth ? (
        <></>
      ) : (
        <ModalAuth
          authUser={props.authUser}
          isAuth={props.isAuth}
          setIsAuth={props.setIsAuth}
          setModal={props.setModal}
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
            {props.isAuth === null ? (
              <></>
            ) : (
              <div className={css.burgerLinks}>
                <Link
                  onClick={activeBurger}
                  className={css.link}
                  to="/personal"
                >
                  <p className={`${css.userText} ${css.burgerLink}`}>
                    Личный кабинет
                  </p>
                </Link>
                <Link
                  onClick={activeBurger}
                  className={css.link}
                  to="/marker-list"
                >
                  <p className={`${css.userText} ${css.burgerLink}`}>
                    Мои закладки
                  </p>
                </Link>
                <Link onClick={activeBurger} className={css.link} to="/resume">
                  <button
                    className={`${css.navItem} ${css.blackLink}  ${css.burgerLink}`}
                  >
                    Спиcок резюме
                  </button>
                </Link>
              </div>
            )}
              <div className={css.burgerLinks}>
                <a href="tel:+996709699079">
                  <li
                    className={`${css.navItem} ${css.blueLink} ${css.burgerLink}`}
                  >
                    Получить консультацию
                  </li>
                  </a>
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
          <a
            href="tel:+996709699079"
            className={`${css.navItem} ${css.blueLink}`}
          >
            Получить консультацию
          </a>
        </ul>
        <div className={css.userItem}>
          <div className={css.userTexts}>
            {props.isAuth === null ? (
              <></>
            ) : (
              <div className={css.icons}>
                <Link className={css.link} to="/marker-list">
                  <img
                    className={`${css.userIcon} ${css.userIconMarker}`}
                    src={saveIcon}
                    alt=""
                  />
                </Link>
                <Link className={css.link} to="/personal">
                  <p className={css.userText}>Личный кабинет</p>
                  <img className={css.userIcon} src={userIcon} alt="" />
                </Link>
              </div>
            )}
            <p className={css.textLanguage}>RU</p>
          </div>
        </div>
      </nav>
    </div>
  );
};
