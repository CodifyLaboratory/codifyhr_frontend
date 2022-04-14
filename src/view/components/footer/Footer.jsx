import css from "./footer.module.css";
import Logo from "../../../assets/logo.png";
import certificateImg from "../../../assets/certificateImg.png";
import SimpleMap from "../map/Map"; 
import facebookIcon from "../../../assets/facebookIcon.png";
import instIcon from "../../../assets/instIcon.png";
import { Networks } from "../networks/Networks";
import { Link as ScrollLink } from "react-scroll"
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={css.footer}>
      <div className="container">
        <div className={css.footerLinks}>
          <div className={css.logoBloc}>
            <div>
              <img src={Logo} alt="" />
            </div>
            <Networks />
            <div className={css.certificate}>
              <p className={css.certificateText}>
                Лицензия Министерства Образования и Науки{" "}
              </p>
              <img src={certificateImg} alt="" />
            </div>
          </div>
          <div className={css.mapBlock}>
            <p className={css.mainLink}>АДРЕС:</p>
            <p className={css.link}>г. Бишкек, ул. Исанова 105/3</p>
            <SimpleMap />
          </div>
          <div className={css.firstLinkBlock}>
            <p className={css.mainLink}>САЙТ</p>
            <ScrollLink to="aboutus" smooth={true} duration={500} className={css.link}>О нас</ScrollLink>
            <ScrollLink to="howWeWork" smooth={true} duration={500} className={css.link}>Как мы работаем</ScrollLink>
            <ScrollLink to="cours" smooth={true} className={css.link}>Курсы, тренинги, семинары</ScrollLink>
            <ScrollLink to="ourPartners" smooth={true} duration={500} className={css.link}>Наши партнеры</ScrollLink>
            <Link to="/resume" className={css.link}>Резюме студентов</Link>
            <Link to="/personal" className={css.link}>Личный кабинет </Link>
            <a href="tel:+996709699079" className={css.link}>Получить консультацию </a>
          </div>
          <div className={css.firstLinkBlock}>
            <p className={css.mainLink}>РЕЗЮМЕ</p>
            <Link to="/resume" className={css.link}>Front-end</Link>
            <Link to="/resume" className={css.link}>Back-end</Link>
            <Link to="/resume" className={css.link}>Android</Link>
            <Link to="/resume" className={css.link}>Testing QA</Link>
            <Link to="/resume" className={css.link}>Project Management</Link>
            <Link to="/resume" className={css.link}>Graphic Design</Link>
            <Link to="/resume" className={css.link}>UX / UI</Link>
          </div>
          <div className={css.linkBlock}>
            <p className={css.mainLink}>ДРУГОЕ</p>
            <p className={css.link}>Обратная связь</p>
            <p className={css.link}>Техническая поддержка</p>
          </div>
          <div className={css.contacts}>
            <p className={css.mainLink}>КОНТАКТЫ</p>
            <p className={`${css.contactNumber} ${css.link}`}>+996 500 431 430 </p>
            <p className={`${css.contactNumber} ${css.link}`}>+996 550 431 430 </p>
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
          <p className={css.footerLanguage}>English (US)</p>
          <div className={css.linkIcon}>
            <img src={facebookIcon} alt="" />
          </div>
          <div className={css.linkIcon}>
            <img src={instIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
