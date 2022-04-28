import css from "../aboutUs/aboutUs.module.css"
export const AboutUsDescription = (props) => {
    return (
        <div id={props.id} style={{boxShadow: props.shadow, padding: props.padding, background: props.bg}} className={css.donwDescription}>
            <p className={css.title}>{props.title}</p>
            <p className={css.textDescription}>{props.description}</p>
            <a href={props.link} target="_blank" rel="noreferrer" className={css.btn}>Подробнeе</a>
        </div>
    )
}