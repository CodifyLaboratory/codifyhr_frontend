import css from "./footer.module.css";
import Logo from "../../../assets/logo.png";
import certificateImg from "../../../assets/certificateImg.png";
import SimpleMap from "../map/Map";
import { FooterLinks } from "../footerLinks/FooterLinks";
import facebookIcon from "../../../assets/facebookIcon.png";
import instIcon from "../../../assets/instIcon.png";
import { Networks } from "../networks/Networks";

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
          <div className={css.linkBlock}>
            <p className={css.mainLink}>САЙТ</p>
            <p className={css.link}>О нас</p>
            <p className={css.link}>Как мы работаем</p>
            <p className={css.link}>Курсы, тренинги, семинары</p>
            <p className={css.link}>Наши партнеры</p>
            <p className={css.link}>Резюме студентов</p>
            <p className={css.link}>Личный кабинет </p>
            <p className={css.link}>Получить консультацию </p>
          </div>
          <div className={css.linkBlock}>
            <p className={css.mainLink}>РЕЗЮМЕ</p>
            <p className={css.link}>Front-end</p>
            <p className={css.link}>Back-end</p>
            <p className={css.link}>Android</p>
            <p className={css.link}>Testing QA</p>
            <p className={css.link}>Project Management</p>
            <p className={css.link}>Graphic Design</p>
            <p className={css.link}>UX / UI</p>
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
