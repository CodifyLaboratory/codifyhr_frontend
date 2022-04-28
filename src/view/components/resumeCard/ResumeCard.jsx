import css from "../resume/resume.module.css"
import {useHistory} from "react-router-dom";

export const ResumeCard = ({image, title, modal, setModal, isAuth}) => {
    const history = useHistory();

    const pushResumesClick = () => {
        history.push(isAuth ? "/resume/" : "");
    }

    return (
        <div className={css.card}>
            <div className={css.cardImg}>
                <img src={image} alt="" />
            </div>
            <div className={css.cardAbout}>
                <p className={css.cardTitle}>{title}</p>
                <button
                    onClick={() => isAuth ? null || pushResumesClick() : setModal(!modal)  }
                    className={css.cardBtn}>
                    список кандидатов
                </button>
            </div>
        </div>
    )
}