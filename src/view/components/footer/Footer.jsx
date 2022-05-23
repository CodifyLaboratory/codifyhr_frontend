import css from "./footer.module.css";
import Logo from "../../../assets/logo.png";
import certificateImg from "../../../assets/certificateImg.png";
import SimpleMap from "../map/Map";
import {Networks} from "../networks/Networks";
import {Link as ScrollLink} from "react-scroll"
import {Link} from "react-router-dom";

export const Footer = ({isAuth}) => {
    return (<div className={css.footer}>
            <div className="container">
                <div className={css.footerLinks}>
                    <div className={css.logoBloc}>
                        <Link to="/">
                            <img src={Logo} alt=""/>
                        </Link>
                        <Networks/>
                        <div className={css.certificate}>
                            <p className={css.certificateText}>
                                Лицензия Министерства Образования и Науки{" "}
                            </p>
                            <img src={certificateImg} alt=""/>
                        </div>
                    </div>
                    <div className={css.mapBlock}>
                        <p className={css.mainLink}>АДРЕС:</p>
                        <p className={css.link}>г. Бишкек, ул. Исанова 105/3</p>
                        <SimpleMap/>
                    </div>
                    <div className={css.firstLinkBlock}>
                        <p className={css.mainLink}>САЙТ</p>
                        <ScrollLink to="/aboutUs" smooth={true} duration={500} className={css.link}>О нас</ScrollLink>
                        <ScrollLink to="howWeWork" smooth={true} duration={500} className={css.link}>Как мы
                            работаем</ScrollLink>
                        <ScrollLink to="courses" smooth={true} className={css.link}>Курсы, тренинги,
                            семинары</ScrollLink>
                        <Link to="/partners" className={css.link}>Наши
                            партнеры</Link>
                        {isAuth ? <>
                            <Link to="/resume" className={css.link}>Резюме студентов</Link>
                            <Link to="/personal" className={css.link}>Личный кабинет </Link>
                        </> : null}

                        <a href="tel:+996709699079" className={css.link}>Получить консультацию </a>
                    </div>
                    <div className={css.linkBlock}>
                        <p className={css.mainLink}>ДРУГОЕ</p>
                        <p className={css.link}>Обратная связь</p>
                        <a href="tel:+996 550 431 430" className={css.link}>Техническая поддержка</a>
                        <div className={css.contacts}>
                            <p className={css.mainLink}>КОНТАКТЫ</p>
                            <a href="tel:+996 500 431 430" className={`${css.contactNumber} ${css.link}`}>+996 500 431
                                430 </a>
                            <a href="tel:+996 550 431 430" className={`${css.contactNumber} ${css.link}`}>+996 550 431
                                430 </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className={css.footerLine}></div>
            <div className={`${css.footerCopyRight} ${"container"} `}>
                <div className={css.leftText}>
                    <p className={css.copyRightText}>© 2022 Codify Lab</p>
                    <p className={css.copyRightText}>Privacy</p>
                    <p className={css.copyRightText}>Terms</p>
                </div>
                <div className={css.rightText}>
                    <p className={css.footerLanguage}>Русский (RU)</p>
                </div>
            </div>
        </div>);
};
