import { useState } from "react"
import css from "./userResume.module.css";
import { Info } from "../../components/info/Info";
import PhotoUser from "../../../assets/ava_personal.jpg";
import Saved from "../../../assets/saved.png";
import Save from "../../../assets/save.png";

export const UserResume = () => {
  const [select, setSelect] = useState()
  return (
    <div className="container">
      <div className={css.infoUser}>
        <div className={css.mainInfo}>
          <div className={css.profilePhoto}>
            <img src={PhotoUser} alt="" />
          </div>
          <div className={css.mainDes}>
            <div className={css.saveItem}>
              <p className={css.mainInfoTitle}>Основная информация</p>
              {!select && <img className={css.saveImg} src={Save} alt="selecet" onClick={() => setSelect(!select)}/>}
              {select && <img className={css.saveImg} src={Saved} alt="seleceted" onClick={() => setSelect(!select)}/>}
            </div>
            <Info titleText="Имя" infoText="Анна" />
            <Info titleText="Фамилия" infoText="Борисовна" />
            <Info titleText="Специализация" infoText="Full-stack Development" />
            <Info titleText="Опыт работы" infoText="100+ лет" />
          </div>
        </div>
        <div className={`${css.mainDes} ${css.mainDes_down}`}>
          <p className={css.mainInfoTitle}>Контактные данные</p>
          <Info titleText="Мобильный телефон" infoText="+996(704)-32-90-76" />
          <Info titleText="Электронная почта" infoText="kalinina_s@gmail.com" />
        </div>
      </div>
      <div className={css.infoBtn}>
        <button>Скачать резюме</button>
      </div>
    </div>
  );
};