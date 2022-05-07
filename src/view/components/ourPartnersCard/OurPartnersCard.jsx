import img from "../../../assets/partnerLogo.png";
import css from "../ourPartners/ourPartners.module.css";

export const OurPartnersCard = ({item}) => {
  return (
    <a className={css.link} href={item.link} target="_blank" rel="noreferrer">
      <div className={css.card}>
        <div className={css.cardImg}>
          {item.image === null ? (
            <img className={css.logoImg} src={img} alt="partners image" />
          ) : (
            <img className={css.partnerImg} src={item.image} alt="partners image" />
          )}
        </div>
        <p className={css.text}>
          {item.title}
        </p>
      </div>
    </a>
  );
};
