import css from "../resume/resume.module.css"

export const ResumeCard = (props) => {
    return (
        <div className={css.card}>
            <div className={css.cardImg}>
                <img src={props.image} alt="" />
            </div>
            <div className={css.cardAbout}>
                <p className={css.cardTitle}>{props.title}</p>
                <button className={css.cardBtn}>список кандидатов</button>
            </div>
        </div>
    )
}