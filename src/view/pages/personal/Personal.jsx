import css from "./personal.module.css"
import Ava from "../../../assets/ava_personal.jpg"
import Phone from "../../../assets/phone_personal.svg"
import Email from "../../../assets/email_personal.svg"
import Left from "../../../assets/left_arrow_personal.svg"
import Right from "../../../assets/right_arrow_personal.svg"
import Down from "../../../assets/down_arrow_personal.svg"
import { Candidat } from "../../components/candidat/Candidat"


export const Personal = () => {
    return (
        <div className={` ${css.personalContainer} "container"`}>
            <div className={css.personal}>
                <div className={css.ava}><img src={Ava} alt="" /></div>
                <div className={css.info}>
                    <p className={css.name}>Абайдулаева Айдай Орозалиева</p>
                    <p className={css.company}>Название компании</p>
                    <div className={css.phone}>
                        <img src={Phone} alt="" />
                        <p>+996 123-13-12</p>
                    </div>
                    <div className={css.email}>
                        <img src={Email} alt="" />
                        <p>abdulaeva@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className={css.resumes_list}>
                <div className={css.head}>
                    <div className={css.number_of_resumes}>
                        <p>&nbsp;&nbsp;&nbsp; 1-10 из 100 </p>
                        <div className={css.buttons}>
                            <p><img src={Left} alt="" /></p>
                            <p><img src={Right} alt="" /></p>
                        </div>
                    </div>
                    <hr className={css.line} />
                    <div className={css.specialization}>
                        <p>ФИО</p>
                        <p>Специализация</p>
                    </div>
                </div>
                <div className={css.resumes}>
                    <Candidat />
                    <Candidat />
                    <Candidat />
                    <Candidat />
                    <Candidat />
                </div>
                <button className={css.more_btn}>Смотреть еще <p><img src={Down} alt="" /></p></button>
            </div>
        </div>
    )
}