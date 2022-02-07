import css from "./modalRegis.module.css"

export const ModalRegis = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={css.content} onClick={e => e.stopPropagation()}>
                Регистрация
            </div>

        </div>
    )
}