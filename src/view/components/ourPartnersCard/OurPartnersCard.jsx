import img from "../../../assets/FrontImg.png";
import css from "../ourPartners/ourPartners.module.css";

export const OurPartnersCard = (props) => {
  return (
    <a href={props.item.link} target="_blank" rel="noreferrer">
      <div className={css.card}>
        <div className={css.cardImg}>
          {props.item.image === null ? (
            <img src={img} alt="img" />
          ) : (
            <img src={props.item.image} alt="img" />
          )}
          {/* <img src={props.item.image} alt="" /> */}
        </div>
        <p key={props.item.id} className={css.text}>
          {props.item.title}
        </p>
      </div>
    </a>
  );
};
