import {useEffect, useState} from "react"
import { OurPartnersCard } from "../ourPartnersCard/OurPartnersCard"
import css from "./ourPartners.module.css"
import  Arrow from "../../../assets/arrow.png"
import API from "../../../api/API"
export const OurPartners = () => {
    const [partners, setPartners] = useState([])
    useEffect(() => {
        API.getPartners()
            .then((res) => {
                setPartners(res.data)
            })
    }, [])
    return (
        <div className="container">
            <p className={css.title}>Компании, в которых работают наши студенты</p>
                <div className={css.cards}>
                    <div className={css.cardsItem}>
                        {
                            partners.map((item) => <OurPartnersCard item={item}/>)
                        }
                        {/* <OurPartnersCard img={partnerLogo} text="Следует отметить, что дальнейшее развитие" /> */}
                        {/* <OurPartnersCard img={partnerLogo} text="Следует отметить, что дальнейшее развитие" />
                        <OurPartnersCard img={partnerLogo} text="Следует отметить, что дальнейшее развитие" /> */}
                    </div>
                    <div className={css.arrowIcon}>
                        <img src={Arrow} alt="" />
                        
                    </div>
                </div>
        </div>
    )
}