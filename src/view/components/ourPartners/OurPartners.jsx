import { OurPartnersCard } from "../ourPartnersCard/OurPartnersCard"
import css from "./ourPartners.module.css"
import  Arrow from "../../../assets/arrow.png"
import  partnerLogo from "../../../assets/partnerLogo.png"
export const OurPartners = () => {
    return (
        <div className="container">
            <p className={css.title}>Наши партнеры</p>
                <div className={css.cards}>
                    <div className={css.cardsItem}>
                        <OurPartnersCard img={partnerLogo} text="Следует отметить, что дальнейшее развитие" />
                        <OurPartnersCard img={partnerLogo} text="Следует отметить, что дальнейшее развитие" />
                        <OurPartnersCard img={partnerLogo} text="Следует отметить, что дальнейшее развитие" />
                    </div>
                    <div className={css.arrowIcon}>
                        <img src={Arrow} alt="" />
                    </div>
                </div>
        </div>
    )
}