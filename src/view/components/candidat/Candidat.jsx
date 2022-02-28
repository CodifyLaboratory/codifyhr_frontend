import css from "./candidat.module.css"
import Ava from "../../../assets/ava_personal.jpg"

export const Candidat = () => {
    return(
        <div>
            <hr className={css.line}/>
            <div className={css.info}>
                <div><img src={Ava} alt="" /></div>
                <p className={css.name}>Евгений Нестеров </p>
                <p className={css.profession}>Project Management</p>
                <button className={css.more}>подробнее</button>
                <button className={css.download}>СКАЧАТЬ РЕЗЮМЕ</button>
                <button className={css.download_hidden}>СКАЧАТЬ</button>

            </div>
        </div>
    )
}