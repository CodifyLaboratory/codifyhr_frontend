import css from "../personnel/personnel.module.css"

export const PersonnelNum = ({num, text}) => {
    return (
        <div className={css.personnelBlock}>
                <p className={css.personnelNum}>{num}</p>
                <div className={css.personnelLine}></div>
                <p className={css.personnelText}>{text}</p>
        </div>
    )
}