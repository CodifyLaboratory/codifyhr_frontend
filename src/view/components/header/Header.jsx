import css from "./header.module.css"
import {Link} from "react-router-dom"
import Logo from "../../../assets/logo.png"

export const Header = () => {
    // const [modal, setModal] = useState()
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
                        <img src={Logo} alt="" />                   
                    </Link>
                </div>
                <ul className={css.navList}>
                    <Link className={css.link} to="/resume">
                        <li className={`${css.navItem} ${css.blackLink}`}>Спиcок резюме</li>
                    </Link>
                    <Link className={css.link} exact to="/get">
                        <li className={`${css.navItem} ${css.blueLink}`}>Получть консультацию</li>
                    </Link>
                </ul>
                <div className={css.userItem}>
                    <p className={css.textLanguage}>RU</p>
                    <p className={css.userText}>Вход</p>
                    <p className={css.userText}>Регистрация</p>
                </div>
            </nav>
        </div>
    )
} 