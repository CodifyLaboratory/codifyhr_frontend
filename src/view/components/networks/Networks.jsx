import css from "./networks.module.css"
import Facebook from "../../../assets/facebook.png"
import Instagram from "../../../assets/instagram.png"
import YouTube from "../../../assets/youtube.png"
import Telegram from "../../../assets/telegram.png"
import Whatsapp from "../../../assets/whatsapp.png"
import Linkedin from "../../../assets/linkedin.png"
export const Networks = () => {
    return (
        <div className={css.networks}>
            <a href="https://www.facebook.com/groups/codifylab/?source_id=1312010315635047" target="_blank" rel="noreferrer" className={css.networksIcon}>
                <img src={Facebook} alt="" />
            </a>
            <a href="https://www.instagram.com/codifylab.kg/" target="_blank" rel="noreferrer" className={css.networksIcon}>
                <img src={Instagram} alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UCcnOc_ZLd1FtJufrfW1iSWw?view_as=subscriber" target="_blank" rel="noreferrer" className={css.networksIcon}>
                <img src={YouTube} alt="" />
            </a>
            <a href="https://t.me/codifynews" target="_blank" rel="noreferrer" className={css.networksIcon}>
                <img src={Telegram} alt="" />
            </a>
            <a href="" target="_blank" rel="noreferrer" className={css.networksIcon}>
                <img src={Whatsapp} alt="" />
            </a>
            <a href="" target="_blank" rel="noreferrer" className={css.networksIcon}>
                <img src={Linkedin} alt="" />
            </a>
        </div>
    )
}