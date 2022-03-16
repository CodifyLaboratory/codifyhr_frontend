import css from "./candidat.module.css";
import Ava from "../../../assets/ava_personal.jpg";
import { Link } from "react-router-dom";
export const Candidat = (props) => {
  
  return (
    <div>
    <Link className="navLink"  to={`/user-resume/${props.item.id}`}>
      <div  className={css.info}>
        <div className={css.aboutUser}>
          <div className={css.image}>
            {props.item.image === null ? (
              <img src={Ava} alt="img" />
            ) : (
              <img src={props.item.image} alt="" />
            )}
          </div>
          <div className={css.aboutUserText}>
            <p
              key={props.item.id}
              className={css.name}
            >{`${props.item.surname} ${props.item.first_name}`}</p>
            <p className={css.profession}>{props.item.category}</p>
          </div>
        </div>
        <div className={css.btns}>
          <button className={css.download}>СКАЧАТЬ РЕЗЮМЕ</button>
          <button className={css.download_hidden}>СКАЧАТЬ</button>
        </div>
      </div>
      </Link>
    </div>
  );
};
