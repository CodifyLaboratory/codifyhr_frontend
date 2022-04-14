import css from "../resume/resume.module.css"
import {useHistory} from "react-router-dom";

export const ResumeCard = (props) => {
    const history = useHistory();

    const pushResumesClick = (e) => {
        e.preventDefault()
        history.push("/resume/")
    }

    return (
        <div className={css.card}>
            <div className={css.cardImg}>
                <img src={props.image} alt="" />
            </div>
            <div className={css.cardAbout}>
                <p className={css.cardTitle}>{props.title}</p>
                <button onClick={pushResumesClick} className={css.cardBtn}>список кандидатов</button>
            </div>
        </div>
    )
}