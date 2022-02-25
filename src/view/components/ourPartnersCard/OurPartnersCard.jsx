import css from "../ourPartners/ourPartners.module.css"

export const OurPartnersCard = (props) => {
    return (
        <div className={css.card}>
            <div className={css.cardImg}>
                <img src={props.img} alt="" />
            </div>
            <p className={css.text}>{props.text}</p>
        </div>
    )
}