import css from "../aboutUs/aboutUs.module.css"
export const AboutUsDescription = (props) => {
    return (
        <div style={{boxShadow: props.shadow, padding: props.padding, background: props.bg}} className={css.AboutUsCenter}>
            <p className={css.title}>{props.title}</p>
            <p className={css.text}>{props.description}</p>
            <button className={css.btn}>Подробнeе</button>
        </div>
    )
}