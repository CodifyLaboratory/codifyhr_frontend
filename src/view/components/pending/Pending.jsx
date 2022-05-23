import css from "./pending.module.css";

export const Pending = () => {
    return (
        <div className={`container ${css.pendingContent}`}>
        <div className={css.loading}>
            <div className={css.ball}></div>
            <div className={css.ball}></div>
            <div className={css.ball}></div>
            <span>Загрузка...</span>
        </div>
        </div>
    )
}