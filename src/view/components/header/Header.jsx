import { useState } from "react";
import css from "./header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import close from "../../../assets/close.png";
import admin from "../../../assets/admin.png";
import saveIcon from "../../../assets/save2.png";
import { ModalAuth } from "../modalAuth/ModalAuth";

export const Header = (props) => {
  const [burger, setBurger] = useState(false);
  const activeBurger = () => setBurger(!burger);

  return (
    <div className={css.header}>
      {props.modal ? (
        <ModalAuth
          authUser={props.authUser}
          isAuth={props.isAuth}
          setIsAuth={props.setIsAuth}
          setModal={props.setModal}
          modal={props.modal}
        />
      ) : (
        <></>
      )}

      <nav className={`container ${css.nav}`}>
        <div className={css.logo}>
          <div onClick={activeBurger} className={burger ? `${css.close}` : `${css.burger}`}>
            <div className={css.burgerLine}></div>
            <div className={css.burgerLine}></div>
            <div className={css.burgerLine}></div>
          </div>
          <div
            className={`${css.burgerContent} ${
              burger ? css[`burgerOpen`] : {}
            }`}
          >
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
          <Link className={`${css.link} ${css.logoIcon}`} to={"/"}>
            <img className={css.logoIcon} src={Logo} alt="" />
          </Link>
        </div>
        <ul className={css.navList}>
          <Link className={css.link} to={props.isAuth ? "/resume" : "/"}>
            <button
              onClick={() =>
                props.isAuth ? null : props.setModal(!props.modal)
              }
              className={`${css.navItem} ${css.blackLink}`}
            >
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
              <button
                onClick={() => props.setModal(!props.modal)}
                className={css.signInBtn}
              >
                Войти
              </button>
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
                  <img className={css.userIcon} src={admin} alt="" />
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
