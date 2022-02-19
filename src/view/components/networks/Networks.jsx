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
            <div className={css.networksIcon}>
                <img src={Facebook} alt="" />
            </div>
            <div className={css.networksIcon}>
                <img src={Instagram} alt="" />
            </div>
            <div className={css.networksIcon}>
                <img src={YouTube} alt="" />
            </div>
            <div className={css.networksIcon}>
                <img src={Telegram} alt="" />
            </div>
            <div className={css.networksIcon}>
                <img src={Whatsapp} alt="" />
            </div>
            <div className={css.networksIcon}>
                <img src={Linkedin} alt="" />
            </div>
        </div>
    )
}