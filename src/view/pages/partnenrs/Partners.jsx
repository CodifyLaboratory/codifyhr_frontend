import css from "./partners.module.css"
import {useEffect, useState} from "react";
import API from "../../../api/API";
import {OurPartnersCard} from "../../components/ourPartnersCard/OurPartnersCard";

export const Partners = () => {
    const [partners, setPartners] = useState([])

    useEffect(() => {
        API.getPartners()
            .then((res) => {
                setPartners(res.data)
            })
    }, [])
    return (
        <div>
            <div className={css.cardsItem}>
                {
                    partners.map((item) => <OurPartnersCard key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
}