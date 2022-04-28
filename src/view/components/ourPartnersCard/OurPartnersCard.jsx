import img from "../../../assets/partnerLogo.png";
import css from "../ourPartners/ourPartners.module.css";

export const OurPartnersCard = (props) => {
  return (
    <a className={css.link} href={props.item.link} target="_blank" rel="noreferrer">
      <div className={css.card}>
        <div className={css.cardImg}>
          {props.item.image === null ? (
            <img className={css.logoImg} src={img} alt="partners image" />
          ) : (
            <img className={css.partnerImg} src={props.item.image} alt="partners image" />
          )}
        </div>
        <p key={props.item.id} className={css.text}>
          {props.item.title}
        </p>
      </div>
    </a>
  );
};
