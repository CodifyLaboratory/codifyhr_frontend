import css from "./modalAuth.module.css"

export const ModalAuth = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={css.content} onClick={e => e.stopPropagation()}>
                <h1 className={css.contentH1}>Вход</h1>
                <div className={css.line}></div>
                <input className={css.input} placeholder="Логин" type="text" />
                <input className={css.input} placeholder="Пароль" type="password" />
                <button>ВОЙТИ</button>
            </div>

        </div>
    )
}