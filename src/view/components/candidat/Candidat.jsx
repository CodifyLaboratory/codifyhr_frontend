import css from "./candidat.module.css";
import Ava from "../../../assets/ava_personal.jpg";
import { UserResume } from "../../pages/userResume/UserResume";

export const Candidat = (props) => {
  return (
    <div>
      <div className={css.info}>
        <div className={css.aboutUser}>
          <div className={css.image}>
            <img src={props.item.image} alt="" />
          </div>
          <div className={css.aboutUserText}>
            <p
              className={css.name}
            >{`${props.item.surname} ${props.item.first_name} ${props.item.last_name}`}</p>
            <p className={css.profession}>{props.item.category}</p>
          </div>
        </div>
        <div className={css.btns}>
          <button className={css.download}>СКАЧАТЬ РЕЗЮМЕ</button>
          <button className={css.download_hidden}>СКАЧАТЬ</button>
        </div>
      </div>
    </div>
  );
};
