import css from "./header.module.css"
import { NavLink} from "react-router-dom"
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
                    <NavLink activeClassName={css.link} exact to="/">
                        <img src={Logo} alt="" />                   
                    </NavLink>
                </div>
                <ul className={css.navList}>
                    <NavLink className={css.link} exact to="/list">
                        <li className={`${css.navItem} ${css.blackLink}`}>Спиcок резюме</li>
                    </NavLink>
                    <NavLink className={css.link} exact to="/get">
                        <li className={`${css.navItem} ${css.blueLink}`}>Получть консультацию</li>
                    </NavLink>
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