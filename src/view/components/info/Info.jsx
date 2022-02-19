import css from "../../pages/userResume/userResume.module.css"

export const Info = (props) => {
    return (
        <div className={css.infoDes}>
            <p className={css.infoTitle}>{props.titleText}</p>
            <p className={css.infoTextDes}>{props.infoText}</p>
        </div>
    )
}