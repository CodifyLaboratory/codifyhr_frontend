import css from "./partners.module.css"
import {useEffect, useState} from "react";
import API from "../../../api/API";
import {OurPartnersCard} from "../../components/ourPartnersCard/OurPartnersCard";

export const Partners = () => {
    const [partners, setPartners] = useState([])
    const [pending, setPending] = useState(true);

    useEffect(() => {
        API.getPartners()
            .then((res) => {
                setPending(false)
                setPartners(res.data)
            })
    }, [])

    if (pending) return <div></div>

    return (
        <div className={`${css.partners} ${"container"}`}>
            <h1 className={css.title}>Наши партнеры</h1>
            {
                partners.length ?
                    <div className={css.partnersItems}>
                        {partners.map((item) => <OurPartnersCard key={item.id} item={item}/>)}
                    </div>
                    :
                    <p className={css.noPartners}>Нет партнеров</p>
            }
        </div>
    )
}