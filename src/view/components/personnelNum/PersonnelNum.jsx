import css from "../personnel/personnel.module.css"

export const PersonnelNum = (props) => {
    return (
        <div className={css.personnelBlock}>
                <p className={css.personnelNum}>{props.num}</p>
                <div className={css.personnelLine}></div>
                <p className={css.personnelText}>{props.text}</p>
        </div>
    )
}