import {useEffect, useState} from "react"
import { OurPartnersCard } from "../ourPartnersCard/OurPartnersCard"
import css from "./ourPartners.module.css"
import  Arrow from "../../../assets/arrow.png"
import API from "../../../api/API"
import {useHistory} from "react-router-dom";
export const OurPartners = () => {
    const [partners, setPartners] = useState([])
    const history = useHistory();

    const pushPartnersClick = (e) => {
        e.preventDefault()
        history.push("/partners/")
    }
    useEffect(() => {
        API.getPartners()
            .then((res) => {
                setPartners(res.data)
            })
    }, [])
    return (
        <div className="container">
            <p id="ourPartners" className={css.title}>Компании, в которых работают наши студенты</p>
                <div className={css.cards}>
                    <div className={css.cardsItem}>
                        {
                            partners.map((item) => <OurPartnersCard key={item.id} item={item}/>)
                        }
                        </div>
                    <div onClick={pushPartnersClick} className={css.arrowIcon}>
                        <img src={Arrow} alt="" />
                    </div>
                </div>
        </div>
    )
}