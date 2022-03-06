import { Link } from "react-router-dom";
import css from "../ourPartners/ourPartners.module.css";

export const OurPartnersCard = (props) => {
  return (
    <Link to={`/partner/${props.item.link}`}>
      <div className={css.card}>
        <div className={css.cardImg}>
          <img src={props.item.image} alt="" />
        </div>
        <p key={props.item.id} className={css.text}>{props.item.title}</p>
      </div>
    </Link>
  );
};
