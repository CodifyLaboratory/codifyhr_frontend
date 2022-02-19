import css from "./userResume.module.css";
import { Info } from "../../components/info/Info";
import PhotoUser from "../../../assets/ava_personal.jpg";
export const UserResume = () => {
  return (
    <div className="container">
      <div className={css.infoUser}>
        <div className={css.mainInfo}>
          <div className={css.profilePhoto}>
            <img src={PhotoUser} alt="" />
          </div>
          <div>
            <p className={css.mainInfoTitle}>Основная информация</p>
            <Info titleText="Имя" infoText="Светлана" />
            <Info titleText="Фамилия" infoText="Светлана" />
            <Info titleText="Пол" infoText="Женский" />
            <Info titleText="Дата рождения" infoText="8 сентября, 1999" />
            <Info titleText="Гражданство" infoText="Кыргызстан" />
            <Info titleText="Специализация" infoText="Front-End Development" />
            <Info titleText="Опыт работы" infoText="5 лет" />
          </div>
        </div>
        <div>
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
